const fs = require('fs');
for (const file of ['dist/index.html', 'dist/jp/index.html', 'dist/zh/index.html']) {
  const html = fs.readFileSync(file, 'utf8');
  console.log('---', file);
  // Find the "more" links
  const moreLinks = html.match(/<a[^>]*href="\/[^"]*\/events\/?"[^>]*>[^<]+<\/a>|<a[^>]*href="\/[^"]*\/blog\/?"[^>]*>[^<]+<\/a>/g) || [];
  for (const m of moreLinks) console.log(' ', m);
}
