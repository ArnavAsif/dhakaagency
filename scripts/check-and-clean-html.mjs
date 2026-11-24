import fs from 'fs';
import path from 'path';

const files = ['header.html', 'main.html', 'footer.html'];
const imgDir = path.resolve('public/assets/images');

async function processHtml() {
  for (const f of files) {
    const fPath = path.resolve('src/data', f);
    if (!fs.existsSync(fPath)) continue;
    let content = fs.readFileSync(fPath, 'utf8');

    // Find all media URLs
    const matches = content.match(/https?:\/\/[^"'\s\)]+\.(?:webp|png|jpg|jpeg|svg|gif)(?:\?[^"'\s\)]*)?/gi) || [];
    console.log(`${f}: Found ${matches.length} remote media URLs.`);

    for (const url of matches) {
      const cleanUrl = url.split('?')[0];
      const filename = path.basename(cleanUrl);
      const localFile = path.join(imgDir, filename);

      if (!fs.existsSync(localFile)) {
        console.log(`Downloading missing: ${filename}...`);
        try {
          const res = await fetch(url);
          if (res.ok) {
            fs.writeFileSync(localFile, Buffer.from(await res.arrayBuffer()));
            console.log(`✓ Saved ${filename}`);
          }
        } catch (e) {
          console.error(`✗ Error downloading ${url}: ${e.message}`);
        }
      }

      // Replace URL in content
      const regex = new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      content = content.replace(regex, `/assets/images/${filename}`);
    }

    fs.writeFileSync(fPath, content);
    console.log(`✓ Rewritten ${f}`);
  }
}

processHtml();
