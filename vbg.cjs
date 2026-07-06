const fs = require('fs');
const css = fs.readFileSync('dist/_astro/Layout.CSjZ4eFH.css', 'utf8');
const m = css.match(/\.bg-f1f4f6\s*\{[^}]*\}/g);
console.log('bg-f1f4f6 rule:', m ? m[0] : 'not found');
// Check the EN and JP home pages
for (const file of ['dist/index.html', 'dist/jp/index.html']) {
  const html = fs.readFileSync(file, 'utf8');
  // Find the Explore Services button
  const m = html.match(/<a[^>]*href="#services"[^>]*>Explore[\s\S]{0,300}?<\/a>|<a[^>]*href="[^"]*#services"[\s\S]{0,300}?<\/a>/);
  if (m) console.log(file, '->', m[0].slice(0, 250));
  else {
    // Find the secondary button via the explore text
    const i = html.indexOf('Explore Services');
    if (i > -1) console.log(file, '-> button at', i);
  }
}
