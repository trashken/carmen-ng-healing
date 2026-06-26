const fs = require('fs');
for (const file of ['dist/en/events/index.html', 'dist/jp/events/index.html', 'dist/zh/events/index.html']) {
  const html = fs.readFileSync(file, 'utf8');
  console.log(`--- ${file}`);
  // Find the timezone selector
  const selectorMatch = html.match(/data-tz-selector[\s\S]{0,2000}?<\/div>/);
  if (selectorMatch) {
    const labels = [...selectorMatch[0].matchAll(/data-tz-option="(hkt|jst)"[\s\S]{0,500}?>([^<]+)</g)];
    for (const m of labels) console.log('  button:', m[1], '->', m[2].trim());
  }
  // Find the first event-time block
  const evMatch = html.match(/<span data-event-time>[\s\S]{0,500}?<\/span>\s*<\/span>/);
  if (evMatch) {
    console.log('  first event-time block:');
    const hkt = (evMatch[0].match(/data-tz="hkt"[\s\S]{0,500}?>([^<]+)</) || [])[1];
    const jst = (evMatch[0].match(/data-tz="jst"[\s\S]{0,500}?>([^<]+)</) || [])[1];
    console.log('    HKT:', hkt);
    console.log('    JST:', jst);
  }
}
