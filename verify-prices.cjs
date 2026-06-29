const fs = require('fs');
const html = fs.readFileSync('dist/en/services/spiritual-guidance/index.html', 'utf8');
// Find the Session Offerings section
const section = html.match(/Session options &amp; pricing[\s\S]{0,5000}?<\/section>/);
if (section) {
  // Find all price lines
  const prices = section[0].match(/<span class="text-ink font-medium">[^<]+<\/span>/g) || [];
  console.log('prices found:', prices.length);
  for (const p of prices) console.log('  ', p);
} else {
  console.log('no offerings section');
}
