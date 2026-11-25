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
        const animalType = breed.type; // 'dog' or 'cat'
        const query = `${breedName} ${animalType} beautiful portrait photography`;
        
        console.log(`Searching for: ${query}`);
        try {
            const images = await google.image(query, { safe: false });
            
            if (images && images.length > 0) {
                // Find first image that is not a wikipedia/wikimedia svg and is high res
                const bestImage = images.find(img => img.url.endsWith('.jpg') || img.url.endsWith('.jpeg') || img.url.endsWith('.png'));
                
                if (bestImage) {
                    const imgUrl = bestImage.url;
                    console.log(`Found image URL for ${breedName}: ${imgUrl}`);
                    const dest = path.join(outputDir, `${breed.id}.jpg`);
                    await downloadImage(imgUrl, dest);
                    console.log(`✅ Successfully downloaded image for ${breedName}`);
                } else {
                    console.log(`❌ No valid jpg/png found for ${breedName}`);
                }
            } else {
                console.log(`❌ No images found for ${breedName}`);
            }
        } catch (e) {
            console.error(`Error with ${breedName}: ${e.message}`);
        }
        
        // Wait 1 second
        await new Promise(r => setTimeout(r, 1000));
    }

    console.log("Finished downloading all real life images!");
}

run().catch(console.error);
