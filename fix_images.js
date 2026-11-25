const fs = require('fs');
let data = fs.readFileSync('src/lib/data.ts', 'utf8');

const dogPlaceholder = 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80';
const catPlaceholder = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80';

data = data.replace(/https:\/\/loremflickr\.com\/800\/600\/animal,(pomeranian|dachshund|cavalierkingcharlesspaniel|chihuahua|bordercollie|boxer|greatdane|goldendoodle|labradoodle|cockapoo|bernedoodle|cavapoo|maltipoo|pomsky|aussiedoodle)\/all/g, dogPlaceholder);

data = data.replace(/https:\/\/loremflickr\.com\/800\/600\/animal,(scottishfold|russianblue|abyssinian|sphynx|americanshorthair|savannahcat|toyger|cheetoh|bambino)\/all/g, catPlaceholder);

fs.writeFileSync('src/lib/data.ts', data);
console.log('Successfully replaced all broken loremflickr image placeholders!');
