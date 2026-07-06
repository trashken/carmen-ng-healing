const fs = require('fs');
for (const file of ['dist/index.html', 'dist/jp/index.html', 'dist/zh/index.html']) {
  const html = fs.readFileSync(file, 'utf8');
  const heroIdx = html.indexOf('id="hero"');
  const afterHero = html.slice(heroIdx, heroIdx + 3000);
  const h1 = afterHero.match(/<h1[^>]*>([^<]*)<\/h1>/);
  console.log(file, '-> h1 in hero:', h1 ? JSON.stringify(h1[1].trim()) : 'not found');
}
