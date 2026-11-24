import fs from 'fs';
import path from 'path';

const imageUrls = [
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/logo.png",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/text-img.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/Scroll.png",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/intro-shape-1.png",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/Group-1000003642.png",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/1-1.jpg",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/arrow-down.png",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/thumb.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/intro-shape.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/logo-2.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/logo-3.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/logo-4.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/logo-5.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/logo-6.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/logo-1.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/react-shape.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/thumb.png",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/img-r-1.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/quote-right.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/ok-img.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/graph-with-img.png",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/t1.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/t2.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/t3.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/wordpress.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/react.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/node.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/flutter.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/redux.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/project-1.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/project-2.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/Rectangle-7031.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/Rectangle-7030.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/project-4.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/project-5.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/Rectangle-968-2.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/Rectangle-968-1.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/Rectangle-968.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/s-1.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/s-2.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/s-3.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/s-4.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/lg-img-1536x760.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/rating.png",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/quote-style-1.svg",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/test-img-3.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/team-1.jpg",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/team-2.jpg",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/team-3.jpg",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/07/team-4.jpg",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/about-2.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/about-1.webp",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/2024/06/blog-1.webp"
];

const targetDir = path.resolve('public/assets/images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const mapping = {};

async function downloadAll() {
  console.log(`Downloading ${imageUrls.length} images...`);
  for (const url of imageUrls) {
    const filename = path.basename(new URL(url).pathname);
    const localPath = path.join(targetDir, filename);
    mapping[filename] = `/assets/images/${filename}`;
    if (!fs.existsSync(localPath)) {
      try {
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (res.ok) {
          const buffer = Buffer.from(await res.arrayBuffer());
          fs.writeFileSync(localPath, buffer);
          console.log(`✓ ${filename}`);
        } else {
          console.error(`✗ ${filename} - HTTP ${res.status}`);
        }
      } catch (err) {
        console.error(`✗ ${filename} - ${err.message}`);
      }
    } else {
      console.log(`Exists: ${filename}`);
    }
  }

  fs.writeFileSync('public/assets/asset-map.json', JSON.stringify(mapping, null, 2));
  console.log('All downloads completed!');
}

downloadAll();
