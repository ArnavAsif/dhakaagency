import fs from 'fs';

const css = fs.readFileSync('public/assets/css/arolax-exact.css', 'utf8');
const urls = Array.from(css.matchAll(/url\(['"]?([^'"\)]+)['"]?\)/g)).map(m => m[1]);
const fontUrls = urls.filter(u => u.includes('.woff') || u.includes('.ttf') || u.includes('.eot'));
console.log('Total URLs in CSS:', urls.length);
console.log('Font files in CSS:', fontUrls);

const bgImages = urls.filter(u => !u.includes('.woff') && !u.includes('.ttf') && !u.includes('.eot') && !u.startsWith('data:'));
console.log('Image URLs in CSS:', bgImages);
