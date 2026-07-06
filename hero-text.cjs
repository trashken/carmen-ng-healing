const fs = require('fs');
const html = fs.readFileSync('dist/index.html', 'utf8');
const m = html.match(/<section id="hero"[\s\S]{0,3000}?<\/section>/);
if (m) {
  const text = m[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 800);
  console.log(text);
}
