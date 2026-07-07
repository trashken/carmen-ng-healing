const fs = require('fs');
const checks = [
  'BigCloud.png',
  'MtFuji.png',
  'PetalSwirl.png',
  'h1',
  'text-white md:text-5xl lg:text-6xl',
  'Q . A',
  'A.U.R.A',
  'Light Code',
];
for (const file of ['dist/index.html', 'dist/en/index.html', 'dist/jp/index.html', 'dist/zh/index.html']) {
  const html = fs.readFileSync(file, 'utf8');
  console.log('---', file);
  for (const c of checks) {
    const found = html.includes(c);
    if (c === 'Q . A') {
      // Q&A is expected to be removed in all
      console.log(`  ${c}: ${found ? 'PRESENT (bad)' : 'absent (good)'}`);
    } else {
      console.log(`  ${c}: ${found ? 'yes' : 'no'}`);
    }
  }
}
