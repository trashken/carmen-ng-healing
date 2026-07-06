const fs = require('fs');
for (const file of ['dist/jp/index.html', 'dist/zh/index.html']) {
  const html = fs.readFileSync(file, 'utf8');
  console.log('---', file);
  console.log('  BigCloud:', html.includes('BigCloud.png'));
  console.log('  SmallCloud:', html.includes('SmallCloud.png'));
  console.log('  MtFuji:', html.includes('MtFuji.png'));
  console.log('  SakuraBranch:', html.includes('SakuraBranch.png'));
  console.log('  MoonSun:', html.includes('MoonSun.png'));
  console.log('  DragonCloud:', html.includes('DragonCloud.png'));
  console.log('  ShrineGate:', html.includes('ShrineGate.png'));
  console.log('  PetalSwirl:', html.includes('PetalSwirl.png'));
  console.log('  Q&A still present:', /Q . A/.test(html));
  console.log('  text-white h1:', html.includes('text-white md:text-5xl lg:text-6xl'));
  console.log('  bg-[#f1f4f6]:', html.includes('bg-[#f1f4f6]'));
}
