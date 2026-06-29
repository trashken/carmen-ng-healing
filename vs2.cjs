const fs = require('fs');
const html = fs.readFileSync('dist/en/services/index.html', 'utf8');
const m = html.match(/href="\/[^"]*\/services\/[^"]+"/g) || [];
console.log('matches:', m.length);
for (const x of [...new Set(m)].sort()) console.log('  ', x);
