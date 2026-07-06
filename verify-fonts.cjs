const fs = require('fs');
const css = fs.readFileSync('dist/_astro/Layout.BjBtclYt.css', 'utf8');
console.log('--font-sans:', css.match(/--font-sans:[^;]+;/g) || ['not found']);
console.log('--font-serif:', css.match(/--font-serif:[^;]+;/g) || ['not found']);
const links = fs.readFileSync('dist/index.html', 'utf8').match(/fonts\.googleapis\.com\/css2\?[^"]+/);
console.log('Google Fonts link:', links ? links[0].slice(0, 200) + '...' : 'not found');
