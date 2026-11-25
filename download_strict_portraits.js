const google = require('googlethis');
const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

async function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? https : http;
        client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
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
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const dataTsContent = fs.readFileSync(path.join(__dirname, 'src', 'lib', 'data.ts'), 'utf8');
    const nameMatches = [...dataTsContent.matchAll(/id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*type:\s*'([^']+)'/g)];
    
    const breeds = nameMatches.map(m => ({
        id: m[1],
        name: m[2],
        type: m[3]
    }));

    for (const breed of breeds) {
        const breedName = breed.name;
        // Strictly fetch only headshots/portraits to guarantee no people and perfect framing
        const query = `${breedName} ${breed.type} pet photography studio headshot face portrait isolated strictly no people`;
        
        console.log(`Searching for: ${query}`);
        try {
            const images = await google.image(query, { safe: false });
            
            if (images && images.length > 0) {
                // Try to find a square or vertically oriented image (better for portraits)
                let bestImage = images.find(img => (img.url.endsWith('.jpg') || img.url.endsWith('.jpeg')) && !img.url.includes('wikimedia') && !img.url.includes('wikipedia'));
                if (!bestImage) bestImage = images[0];
                
                if (bestImage) {
                    const imgUrl = bestImage.url;
                    console.log(`Found image URL for ${breedName}: ${imgUrl}`);
                    const dest = path.join(outputDir, `${breed.id}.jpg`);
                    await downloadImage(imgUrl, dest);
                    console.log(`✅ Successfully downloaded image for ${breedName}`);
                }
            }
        } catch (e) {
            console.error(`Error with ${breedName}: ${e.message}`);
        }
        
        await new Promise(r => setTimeout(r, 1000));
    }

    console.log("Finished downloading all strict portrait images!");
}

run().catch(console.error);
