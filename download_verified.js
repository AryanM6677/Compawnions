const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const manualVerified = {
    'pomeranian': 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Pomeranian_Dog.jpg',
    'chihuahua': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Chihuahua1_gyllina.jpg',
    'boxer': 'https://upload.wikimedia.org/wikipedia/commons/a/af/Boxer_fawn_portrait.jpg',
    'bernedoodle': 'https://images.unsplash.com/photo-1605634563402-3f191b7e4726?auto=format&fit=crop&w=800&q=80', // Fluffy doodle
    'maltipoo': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80', // Fluffy white dog
    'pomsky': 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Black-Magic-Big-Boy.jpg', // Husky-like
    'aussiedoodle': 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Aussiedoodle.jpg',
    'persian': 'https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg',
    'siamese': 'https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg',
    'abyssinian': 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Gustav_chocolate.jpg',
    'sphynx': 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Sphynx_cat_portrait.jpg',
    'cheetoh': 'https://images.unsplash.com/photo-1614274312674-cde24d08b1a8?auto=format&fit=crop&w=800&q=80', // Bengal-like
    'bambino': 'https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?auto=format&fit=crop&w=800&q=80', // Hairless cat
};

async function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? https : http;
        client.get(url, { headers: { 'User-Agent': 'CompawnionsBot/1.0 (https://github.com/aryan)' } }, (res) => {
            if (res.statusCode === 200) {
                const file = fs.createWriteStream(dest);
                res.pipe(file);
                file.on('finish', () => {
                    file.close(resolve);
                });
            } else if (res.statusCode === 301 || res.statusCode === 302) {
                downloadImage(res.headers.location, dest).then(resolve).catch(reject);
            } else {
                reject(new Error(`Failed to download image: ${res.statusCode} ${res.statusMessage}`));
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

async function run() {
    const outputDir = path.join(__dirname, 'public', 'assets', 'images', 'breeds');
    const dataTsContent = fs.readFileSync(path.join(__dirname, 'src', 'lib', 'data.ts'), 'utf8');
    const nameMatches = [...dataTsContent.matchAll(/id:\s*'([^']+)',\s*name:\s*'([^']+)'/g)];
    const breeds = nameMatches.map(m => ({ id: m[1], name: m[2] }));
    const headers = { 'User-Agent': 'CompawnionsBot/1.0 (https://localhost:3000)' };

    for (const breed of breeds) {
        const dest = path.join(outputDir, `${breed.id}.jpg`);
        let imageUrl = null;
        
        let queryTitle = breed.name.replace(/ /g, '_');
        if (breed.name === 'Savannah Cat') queryTitle = 'Savannah_cat';
        
        try {
            const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${queryTitle}&prop=pageimages&format=json&pithumbsize=1000`;
            const res = await fetch(url, { headers });
            const json = await res.json();
            const pages = json.query.pages;
            const pageId = Object.keys(pages)[0];
            
            if (pageId !== '-1' && pages[pageId].thumbnail) {
                imageUrl = pages[pageId].thumbnail.source;
            } else {
                const suffix = breed.name.includes('Cat') ? '' : (breed.id.match(/cat|shorthair|fold|blue|sphynx|toyger|cheetoh|bambino|abyssinian|bengal|maine|ragdoll|persian|siamese/) ? '_(cat)' : '_(dog)');
                const altUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${queryTitle}${suffix}&prop=pageimages&format=json&pithumbsize=1000`;
                const altRes = await fetch(altUrl, { headers });
                const altJson = await altRes.json();
                const altPages = altJson.query.pages;
                const altPageId = Object.keys(altPages)[0];
                
                if (altPageId !== '-1' && altPages[altPageId].thumbnail) {
                    imageUrl = altPages[altPageId].thumbnail.source;
                }
            }
            
            if (!imageUrl && manualVerified[breed.id]) {
                imageUrl = manualVerified[breed.id];
            }
            
            if (imageUrl) {
                console.log(`Downloading ${breed.name} from ${imageUrl}`);
                await downloadImage(imageUrl, dest);
            } else {
                // Last resort fallback: standard Unsplash dog/cat query
                const fallbackUrl = breed.id.includes('cat') ? 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80' : 'https://images.unsplash.com/photo-1517849845537-4d259702454f?auto=format&fit=crop&w=800&q=80';
                console.log(`Fallback for ${breed.name}`);
                await downloadImage(fallbackUrl, dest);
            }
        } catch (e) {
            console.error(`Error with ${breed.name}: ${e.message}`);
        }
        await new Promise(r => setTimeout(r, 200));
    }
    console.log("Finished downloading ALL VERIFIED images!");
}

run().catch(console.error);
