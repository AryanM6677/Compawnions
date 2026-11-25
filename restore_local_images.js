const fs = require('fs');

async function run() {
  const dataJsContent = fs.readFileSync('../data.js', 'utf8');
  const dataTsContent = fs.readFileSync('src/lib/data.ts', 'utf8');

  // Extract mappings from data.js
  const map = {};
  const regexJs = /id:\s*'([^']+)',[\s\S]*?imageUrl:\s*'([^']+)'/g;
  let match;
  while ((match = regexJs.exec(dataJsContent)) !== null) {
    let url = match[2];
    if (!url.startsWith('/')) url = '/' + url;
    map[match[1]] = url;
  }

  // Update data.ts
  const regexTs = /(id:\s*'([^']+)'[\s\S]*?imageUrl:\s*')([^']+)(')/g;
  const newContent = dataTsContent.replace(regexTs, (full, p1, id, oldUrl, p3) => {
    if (map[id]) {
      return `${p1}${map[id]}${p3}`;
    }
    return full;
  });

  fs.writeFileSync('src/lib/data.ts', newContent);
  console.log('Restored local images successfully!');
}

run();
