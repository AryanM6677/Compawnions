const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const fixes = [
    { id: 'border-collie', unsplash: '1517849845537-4d259702454f' },
    { id: 'great-dane', unsplash: '1583511655857-d19b40a7a54e' },
    { id: 'dachshund', unsplash: '1612051680539-7871101ec25d' },
    { id: 'cockapoo', unsplash: '1583337130417-3346a1be7dee' },
    { id: 'goldendoodle', unsplash: '1605634563402-3f191b7e4726' }, // Person in goldendoodle
    { id: 'siamese', unsplash: '1513360371669-4adf3dd7dff8' },
    { id: 'toyger', unsplash: '1574144611937-0b6903958924' },
    { id: 'scottish-fold', unsplash: '1573865526739-10659fec78a5' },
    { id: 'bambino', unsplash: '1516280006081-56f192c126ea' },
    { id: 'savannah', unsplash: '1555685812-4b943f1cb0eb' },
    { id: 'british-shorthair', unsplash: '1514888286974-6c03e2ca1dba' },
    { id: 'shih-tzu', unsplash: '1583337130417-3346a1be7dee' }, // Same as cockapoo for now, fluffy small dog
    { id: 'abyssinian', unsplash: '1591871937634-118e7e17429d' }
];

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

    for (const fix of fixes) {
        // crop=entropy perfectly centers on the subject!
        const imgUrl = `https://images.unsplash.com/photo-${fix.unsplash}?auto=format&fit=crop&w=800&h=800&crop=entropy&q=80`;
        const dest = path.join(outputDir, `${fix.id}.jpg`);
        console.log(`Downloading fix for ${fix.id}...`);
        try {
            await downloadImage(imgUrl, dest);
            console.log(`✅ Fixed ${fix.id}`);
        } catch (e) {
            console.error(`❌ Failed to fix ${fix.id}: ${e.message}`);
        }
    }
}

run().catch(console.error);
