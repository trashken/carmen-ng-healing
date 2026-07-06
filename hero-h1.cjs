const fs = require('fs');
const html = fs.readFileSync('dist/index.html', 'utf8');
const heroIdx = html.indexOf('id="hero"');
const afterHero = html.slice(heroIdx, heroIdx + 3000);
const h1 = afterHero.match(/<h1[^>]*>([^<]*)<\/h1>/);
console.log('h1 in hero:', h1 ? JSON.stringify(h1[1]) : 'not found');
