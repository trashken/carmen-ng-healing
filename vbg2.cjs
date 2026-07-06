const fs = require('fs');
const css = fs.readFileSync('dist/_astro/Layout.Ca3zPtRH.css', 'utf8');
const m = css.match(/\.bg-f1f4f6\s*\{[^}]*\}/g);
console.log('bg-f1f4f6 rule:', m ? m[0] : 'not found');
for (const file of ['dist/index.html', 'dist/jp/index.html']) {
  const html = fs.readFileSync(file, 'utf8');
  const m = html.match(/<a[^>]*href="#services"[^>]*>[^<]+Explore[^<]+<\/a>/);
  if (m) console.log(file, '->', m[0].slice(0, 200));
}
