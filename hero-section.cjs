const fs = require('fs');
const html = fs.readFileSync('dist/index.html', 'utf8');
const m = html.match(/<section id="hero"[\s\S]{0,2000}?<\/section>/);
if (m) {
  const out = m[0].replace(/></g, '>\n<');
  console.log(out);
}
