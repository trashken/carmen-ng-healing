const fs = require('fs');
for (const file of ['dist/index.html', 'dist/jp/index.html', 'dist/zh/index.html']) {
  const html = fs.readFileSync(file, 'utf8');
  console.log('---', file);
  // The hero h1
  const m = html.match(/<h1[^>]*>([^<]+)<\/h1>/);
  console.log('  h1:', m ? m[1].trim() : 'not found');
  // Look for the new localized CTA button text
  console.log('  Book a Session:', html.includes('Book a Session'));
  console.log('  予約する:', html.includes('予約する'));
  console.log('  預約:', html.includes('預約'));
  console.log('  Explore Services:', html.includes('Explore Services'));
  console.log('  サービスを見る:', html.includes('サービスを見る'));
  console.log('  提供的服務:', html.includes('提供的服務'));
  console.log('  Holistic Healing:', html.includes('Holistic Healing'));
  console.log('  ホリスティック・ヒーリング:', html.includes('ホリスティック・ヒーリング'));
  console.log('  整體療癒:', html.includes('整體療癒'));
}
