const fs = require('fs');
const path = require('path');

async function checkWiki() {
    const dataTsContent = fs.readFileSync(path.join(__dirname, 'src', 'lib', 'data.ts'), 'utf8');
    const nameMatches = [...dataTsContent.matchAll(/id:\s*'([^']+)',\s*name:\s*'([^']+)'/g)];
    
    const breeds = nameMatches.map(m => ({ id: m[1], name: m[2] }));
    const results = {};

    for (const breed of breeds) {
        let queryTitle = breed.name.replace(/ /g, '_');
        if (breed.name === 'Savannah Cat') queryTitle = 'Savannah_cat';
        
        try {
            const headers = { 'User-Agent': 'CompawnionsBot/1.0 (https://localhost:3000)' };
            const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${queryTitle}&prop=pageimages&format=json&pithumbsize=1000`;
            const res = await fetch(url, { headers });
            const json = await res.json();
            const pages = json.query.pages;
            const pageId = Object.keys(pages)[0];
            
            if (pageId !== '-1' && pages[pageId].thumbnail) {
                results[breed.id] = pages[pageId].thumbnail.source;
                console.log(`✅ Found: ${breed.name} -> ${pages[pageId].thumbnail.source}`);
            } else {
                // Try appending "(dog)" or "(cat)"
                const suffix = breed.name.includes('Cat') ? '' : (breed.id.match(/cat|shorthair|fold|blue|sphynx|toyger|cheetoh|bambino|abyssinian|bengal|maine|ragdoll|persian|siamese/) ? '_(cat)' : '_(dog)');
                const altUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${queryTitle}${suffix}&prop=pageimages&format=json&pithumbsize=1000`;
                const altRes = await fetch(altUrl, { headers });
                const altJson = await altRes.json();
                const altPages = altJson.query.pages;
                const altPageId = Object.keys(altPages)[0];
                
                if (altPageId !== '-1' && altPages[altPageId].thumbnail) {
                    results[breed.id] = altPages[altPageId].thumbnail.source;
                    console.log(`✅ Found Alt: ${breed.name} -> ${altPages[altPageId].thumbnail.source}`);
                } else {
                    console.log(`❌ Missing: ${breed.name}`);
                }
            }
        } catch (e) {
            console.error(`Error with ${breed.name}: ${e.message}`);
        }
    }
}

checkWiki().catch(console.error);
