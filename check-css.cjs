const fs = require('fs');
const html = fs.readFileSync('dist/_astro/Layout.BjBtclYt.css', 'utf8');
// Find the .text-navy-text CSS rule
const m = html.match(/\.text-navy-text\s*\{[^}]*\}/g);
console.log('text-navy-text rules:', m);
