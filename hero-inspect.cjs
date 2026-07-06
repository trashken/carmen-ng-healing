const fs = require('fs');
const html = fs.readFileSync('dist/index.html', 'utf8');
// Look for any text near "Welcome" or "Holistic"
const m = html.match(/Welcome[\s\S]{0,500}?Holistic/);
if (m) console.log(m[0].replace(/<[^>]+>/g, ' | ').slice(0, 500));
const h1 = html.match(/<h1[^>]*>[^<]*<\/h1>/g);
console.log('h1s:', h1);
