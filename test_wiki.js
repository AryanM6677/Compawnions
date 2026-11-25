const breedName = 'Great Dane';
const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(breedName)}&prop=pageimages&format=json&pithumbsize=800`;
    
fetch(url, {
  headers: {
    'User-Agent': 'CompawnionsApp/1.0 (contact@compawnions.com)'
  }
}).then(res => res.json()).then(data => {
  console.log(JSON.stringify(data, null, 2));
}).catch(console.error);
