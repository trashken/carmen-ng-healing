const fs = require('fs');
for (const file of ['dist/en/services/energy-healing/index.html', 'dist/jp/services/energy-healing/index.html', 'dist/zh/services/energy-healing/index.html']) {
  const html = fs.readFileSync(file, 'utf8');
  console.log('---', file);
  // Find the back link
  const m = html.match(/<a[^>]*back to[^<]*<\/a>|<a[^>]*>←[^<]*<\/a>/i);
  console.log('  back link:', m ? m[0] : 'not found');
  // Show the next ~10 lines of context (the back link + header)
  const backIdx = html.indexOf('←');
  if (backIdx > -1) {
    console.log('  context:');
    console.log('  ', html.slice(backIdx, backIdx + 400).replace(/\n/g, ' '));
  }
}
