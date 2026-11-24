import fs from 'fs';
import path from 'path';

const fontBase = 'https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/themes/arolax/assets/fonts/';
const fonts = ['icomoon.woff', 'icomoon.ttf', 'icomoon.eot'];

const images = [
  'https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/radius-shape-left.png',
  'https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/radius-shape-right.png',
  'https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/brand-shape.png',
  'https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/shape-1.png',
  'https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/Image-1.webp',
  'https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/Image-2.webp',
  'https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/Image-3.webp',
  'https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/Image.webp'
];

async function run() {
  const fontsDir = path.resolve('public/assets/fonts');
  const imgDir = path.resolve('public/assets/images');
  if (!fs.existsSync(fontsDir)) fs.mkdirSync(fontsDir, { recursive: true });
  if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

  for (const f of fonts) {
    try {
      const res = await fetch(fontBase + f);
      if (res.ok) {
        fs.writeFileSync(path.join(fontsDir, f), Buffer.from(await res.arrayBuffer()));
        console.log(`✓ Font saved: ${f}`);
      }
    } catch(e) {
      console.error(e);
    }
  }

  for (const imgUrl of images) {
    const filename = path.basename(imgUrl);
    try {
      const res = await fetch(imgUrl);
      if (res.ok) {
        fs.writeFileSync(path.join(imgDir, filename), Buffer.from(await res.arrayBuffer()));
        console.log(`✓ Image saved: ${filename}`);
      }
    } catch(e) {
      console.error(e);
    }
  }

  // Rewrite in arolax-exact.css
  let css = fs.readFileSync('public/assets/css/arolax-exact.css', 'utf8');
  css = css.replace(/\.\.\/fonts\/(icomoon\.[a-z0-9]+)/gi, '/assets/fonts/$1');
  css = css.replace(/https?:\/\/arolax\.crowdytheme-demo\.com\/web-design-agency\/wp-content\/uploads\/sites\/80\/[0-9]{4}\/[0-9]{2}\/([^"'?\s\)]+)/gi, '/assets/images/$1');
  fs.writeFileSync('public/assets/css/arolax-exact.css', css);
  console.log('✓ arolax-exact.css URLs updated to local paths!');
}

run();
