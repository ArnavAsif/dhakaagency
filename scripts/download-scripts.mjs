import fs from 'fs';
import path from 'path';

const scriptUrls = [
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/animation-addons-for-elementor/assets/js/starter-animations.js",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/animation-addons-for-elementor-pro/assets/js/animations.min.js",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/animation-addons-for-elementor-pro/assets/js/wcf-addons-ex.min.js",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/arolax-essential/assets//js/widgets/arolax-tabs.js",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/arolax-essential/assets//js/widgets/arolax-gallery.js",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/arolax-essential/assets//js/widgets/arolax-testimonial.js",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/themes/arolax/assets/js/script.min.js"
];

async function downloadScripts() {
  const dir = path.resolve('scripts/arolax-scripts');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const url of scriptUrls) {
    const filename = path.basename(new URL(url).pathname);
    try {
      const res = await fetch(url);
      if (res.ok) {
        fs.writeFileSync(path.join(dir, filename), await res.text());
        console.log(`✓ Saved ${filename}`);
      }
    } catch(e) {
      console.error(e);
    }
  }
}

downloadScripts();
