import fs from 'fs';
import path from 'path';

const stylesheets = [
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/animation-addons-for-elementor/assets/css/starter-animations.css?ver=2.6.5",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/animation-addons-for-elementor/assets/css/wcf-addons.min.css?ver=7.0",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/animation-addons-for-elementor-pro/assets/css/wcf-addons-ex.min.css?ver=7.0",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/themes/arolax/assets/css/custom-icons.min.css?ver=3",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/themes/arolax/assets/css/master.min.css?ver=3",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/themes/arolax/assets/css/eazydocs.css?ver=7.0",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/elementor/css/custom-frontend.min.css?ver=1785745394",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/elementor/css/post-3.css?ver=1785745395",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/elementor/assets/css/widget-heading.min.css?ver=4.0.9",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/elementor/assets/css/widget-divider.min.css?ver=4.0.9",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/animation-addons-for-elementor/assets/css/widgets/button.min.css?ver=7.0",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/elementor/assets/css/widget-image.min.css?ver=4.0.9",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/animation-addons-for-elementor-pro/assets/css/widgets/video-popup.min.css?ver=7.0",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/elementor/css/custom-widget-icon-list.min.css?ver=1785745394",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/animation-addons-for-elementor/assets/css/widgets/brand-slider.min.css?ver=7.0",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/animation-addons-for-elementor/assets/css/widgets/icon-box.min.css?ver=7.0",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/animation-addons-for-elementor/assets/css/widgets/team.min.css?ver=7.0",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/elementor/css/custom-widget-accordion.min.css?ver=1785745394",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/animation-addons-for-elementor/assets/css/widgets/posts.min.css?ver=7.0",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/elementor/css/post-6.css?ver=1785745397",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/elementor/css/post-47.css?ver=1785745397",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/animation-addons-for-elementor/assets/css/widgets/nav-menu.min.css?ver=7.0",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/animation-addons-for-elementor/assets/css/widgets/search.min.css?ver=7.0",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/arolax-essential/assets/css/arolax-tabs.css?ver=7.0",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/arolax-essential/assets/css/arolax-gallery.css?ver=7.0",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/arolax-essential/assets/css/arolax-testimonial.css?ver=7.0",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/uploads/sites/80/elementor/css/post-1386.css?ver=1785745398",
  "https://arolax.crowdytheme-demo.com/web-design-agency/wp-content/plugins/animation-addons-for-elementor/assets/css/widgets/social-icons.min.css?ver=7.0"
];

async function run() {
  console.log(`Fetching ${stylesheets.length} stylesheets...`);
  let combinedCss = '';

  for (const url of stylesheets) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        const text = await res.text();
        combinedCss += `\n/* --- FROM: ${url} --- */\n` + text + '\n';
        console.log(`✓ Fetched: ${path.basename(url.split('?')[0])}`);
      } else {
        console.error(`✗ Failed: ${url} (${res.status})`);
      }
    } catch (e) {
      console.error(`✗ Error: ${url} (${e.message})`);
    }
  }

  // Ensure output dir
  const outDir = path.resolve('public/assets/css');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(path.join(outDir, 'arolax-exact.css'), combinedCss);
  console.log(`Saved exact CSS bundle! Total size: ${(combinedCss.length / 1024).toFixed(1)} KB`);
}

run();
