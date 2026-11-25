const fs = require('fs');

const manualOverrides = {
  'Pomsky': 'Pomeranian (dog)',
  'Aussiedoodle': 'Australian Shepherd',
  'Cockapoo': 'Cockapoo',
  'Labradoodle': 'Labradoodle',
  'Goldendoodle': 'Goldendoodle',
  'Bernedoodle': 'Bernedoodle',
  'Cavapoo': 'Cavapoo',
  'Maltipoo': 'Maltipoo',
  'Cheetoh': 'Bengal cat',
  'Bambino': 'Sphynx cat',
  'Toyger': 'Toyger',
  'Savannah Cat': 'Savannah cat',
  'American Shorthair': 'American Shorthair',
  'Sphynx': 'Sphynx cat',
  'Abyssinian': 'Abyssinian cat',
  'Russian Blue': 'Russian Blue',
  'Scottish Fold': 'Scottish Fold',
  'Bengal': 'Bengal cat',
  'British Shorthair': 'British Shorthair',
  'Ragdoll': 'Ragdoll',
  'Maine Coon': 'Maine Coon',
  'Siamese': 'Siamese cat',
  'Persian': 'Persian cat',
  'Great Dane': 'Great Dane',
  'Boxer': 'Boxer (dog)',
  'Border Collie': 'Border Collie',
  'Chihuahua': 'Chihuahua (dog)',
  'Cavalier King Charles Spaniel': 'Cavalier King Charles Spaniel',
  'Dachshund': 'Dachshund',
  'Pomeranian': 'Pomeranian (dog)',
  'Shih Tzu': 'Shih Tzu',
  'Husky': 'Siberian Husky',
  'Australian Shepherd': 'Australian Shepherd',
  'Corgi': 'Pembroke Welsh Corgi',
  'Beagle': 'Beagle',
  'German Shepherd': 'German Shepherd',
  'French Bulldog': 'French Bulldog',
  'Labrador Retriever': 'Labrador Retriever',
  'Golden Retriever': 'Golden Retriever'
};

// Fallback images in case wikipedia has no thumbnail
const fallbacks = {
  'dog': 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
  'cat': 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80'
};

async function fetchWikiImage(breedName, type) {
  try {
    const searchName = manualOverrides[breedName] || breedName;
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(searchName)}&prop=pageimages&format=json&pithumbsize=800`;
    
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'CompawnionsApp/1.0 (contact@compawnions.com)'
      }
    });
    
    if (!res.ok) {
        console.error(`HTTP Error for ${searchName}: ${res.status}`);
        return fallbacks[type];
    }
    
    const data = await res.json();
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    
    if (pageId !== '-1' && pages[pageId].thumbnail) {
      return pages[pageId].thumbnail.source;
    }
  } catch (e) {
    console.error('Error fetching for', breedName, e.message);
  }
  return fallbacks[type];
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function run() {
  const path = 'src/lib/data.ts';
  let content = fs.readFileSync(path, 'utf8');

  // Extract all breed names and their types
  const breeds = [];
  const regex = /name:\s*'([^']+)',\s*type:\s*'([^']+)'/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    breeds.push({ name: match[1], type: match[2] });
  }

  console.log(`Found ${breeds.length} breeds. Fetching with rate-limiting...`);

  const imageMap = {};
  for (const breed of breeds) {
    console.log('Fetching', breed.name);
    const imgUrl = await fetchWikiImage(breed.name, breed.type);
    imageMap[breed.name] = imgUrl;
    await sleep(400); // 400ms delay to respect Wikipedia rate limits
  }

  // Replace in content
  let newContent = content.replace(/name:\s*'([^']+)',([\s\S]*?)imageUrl:\s*'([^']+)'/g, (match, name, middle, oldUrl) => {
      const newUrl = imageMap[name] || oldUrl;
      return `name: '${name}',${middle}imageUrl: '${newUrl}'`;
  });

  fs.writeFileSync(path, newContent);
  console.log('Updated data.ts with Wikipedia images successfully.');
}

run();
