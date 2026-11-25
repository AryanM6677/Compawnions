const puppeteer = require('puppeteer');
const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const data = require('../data.js'); // Assuming data.js is in the parent directory

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

async function scrapeDuckDuckGoImage(page, query) {
    await page.goto(`https://duckduckgo.com/?q=${encodeURIComponent(query)}&t=h_&iar=images&iax=images&ia=images`, { waitUntil: 'networkidle2' });
    
    // Wait for images to load
    try {
        await page.waitForSelector('.tile--img__img', { timeout: 5000 });
        
        // DuckDuckGo stores original image URLs in the src attribute of the images, often passed through an external provider proxy
        // We can just get the proxy URL and download it!
        const imgUrl = await page.evaluate(() => {
            const firstImg = document.querySelector('.tile--img__img');
            if (!firstImg) return null;
            return firstImg.src; 
        });
        
        return imgUrl;
    } catch (e) {
        console.error(`Error scraping ${query}: ${e.message}`);
        return null;
    }
}

async function run() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    const outputDir = path.join(__dirname, 'public', 'assets', 'images', 'breeds');
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
        const query = `${breedName} ${animalType} photography portrait studio lighting isolated`;
        
        console.log(`Searching for: ${query}`);
        let imgUrl = await scrapeDuckDuckGoImage(page, query);
        
        if (imgUrl) {
            console.log(`Found image URL for ${breedName}: ${imgUrl}`);
            const dest = path.join(outputDir, `${breed.id}.jpg`);
            try {
                await downloadImage(imgUrl, dest);
                console.log(`✅ Successfully downloaded image for ${breedName}`);
            } catch (err) {
                console.error(`❌ Failed to download for ${breedName}: ${err.message}`);
            }
        } else {
            console.log(`❌ No image found for ${breedName}`);
        }
        
        // Wait 1 second to avoid rate limits
        await new Promise(r => setTimeout(r, 1000));
    }

    await browser.close();
    console.log("Finished downloading all real life images!");
}

run().catch(console.error);
