const google = require('googlethis');
const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const fails = ['border-collie', 'dachshund', 'goldendoodle', 'toyger', 'bambino', 'abyssinian'];

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
    
    for (const breedId of fails) {
        const breedName = breedId.replace('-', ' ');
        // Extremely strict query to ensure no people and a perfect face portrait
        const query = `${breedName} pet photography studio portrait close up face isolated strictly no people`;
        
        console.log(`Searching for: ${query}`);
        try {
            const images = await google.image(query, { safe: false });
            
            if (images && images.length > 0) {
                const bestImage = images.find(img => img.url.endsWith('.jpg') || img.url.endsWith('.jpeg') || img.url.endsWith('.png'));
                
                if (bestImage) {
                    const imgUrl = bestImage.url;
                    console.log(`Found image URL for ${breedName}: ${imgUrl}`);
                    const dest = path.join(outputDir, `${breedId}.jpg`);
                    await downloadImage(imgUrl, dest);
                    console.log(`✅ Successfully downloaded image for ${breedName}`);
                }
            }
        } catch (e) {
            console.error(`Error with ${breedName}: ${e.message}`);
        }
        
        await new Promise(r => setTimeout(r, 1000));
    }
}

run().catch(console.error);
