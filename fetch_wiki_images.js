const fs = require('fs');

async function fetchWikiImage(breedName) {
  try {
    // Some manual overrides for better matching
    let searchName = breedName;
    if (breedName === 'Labrador') searchName = 'Labrador Retriever';
    if (breedName === 'Corgi') searchName = 'Pembroke Welsh Corgi';

    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(searchName)}&prop=pageimages&format=json&pithumbsize=800`;
    const res = await fetch(url);
    const data = await res.json();
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    if (pageId !== '-1' && pages[pageId].thumbnail) {
      return pages[pageId].thumbnail.source;
    }
  } catch (e) {
    console.error('Error fetching for', breedName, e);
  }
  return null;
}

async function run() {
  const path = 'src/lib/data.ts';
  let content = fs.readFileSync(path, 'utf8');

  // Extract all breed names
  const breedNames = [];
  const regex = /name:\s*'([^']+)'/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    breedNames.push(match[1]);
  }

  console.log(`Found ${breedNames.length} breeds.`);

  const imageMap = {};
  for (const name of breedNames) {
    console.log('Fetching', name);
    const imgUrl = await fetchWikiImage(name);
    if (imgUrl) {
      imageMap[name] = imgUrl;
    } else {
      // Fallback
      imageMap[name] = `https://loremflickr.com/800/600/animal,${name.toLowerCase().replace(/[^a-z]/g, '')}/all`;
    }
  }

  // Replace in content
  let newContent = content.replace(/name:\s*'([^']+)',([\s\S]*?)imageUrl:\s*'([^']+)'/g, (match, name, middle, oldUrl) => {
      const newUrl = imageMap[name] || oldUrl;
      return `name: '${name}',${middle}imageUrl: '${newUrl}'`;
  });

  fs.writeFileSync(path, newContent);
  console.log('Updated data.ts with Wikipedia images.');
}

run();
