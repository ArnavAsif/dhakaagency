import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

async function extract() {
  const rawHtmlPath = path.resolve('src/data/raw-homepage.html');
  let html = '';
  if (fs.existsSync(rawHtmlPath)) {
    html = fs.readFileSync(rawHtmlPath, 'utf8');
  } else {
    const res = await fetch('https://arolax.crowdytheme-demo.com/web-design-agency/', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    html = await res.text();
  }

  // Rewrite image URLs to local /assets/images/...
  html = html.replace(/https:\/\/arolax\.crowdytheme-demo\.com\/web-design-agency\/wp-content\/uploads\/sites\/80\/[0-9]{4}\/[0-9]{2}\/([^"'?#\s\)]+)/g, '/assets/images/$1');
  html = html.replace(/https:\/\/arolax\.crowdytheme-demo\.com\/web-design-agency\/wp-content\/plugins\/[^\/]+\/assets\/images\/([^"'?#\s\)]+)/g, '/assets/images/$1');

  const $ = cheerio.load(html);

  // 1. Isolate Header
  const headerHtml = $('.elementor-47').prop('outerHTML') || '';
  fs.writeFileSync('src/data/header.html', headerHtml);
  console.log(`✓ Header extracted: ${headerHtml.length} chars`);

  // 2. Isolate Main Content
  const mainHtml = $('.elementor-6').prop('outerHTML') || '';
  fs.writeFileSync('src/data/main.html', mainHtml);
  console.log(`✓ Main extracted: ${mainHtml.length} chars`);

  // 3. Isolate Footer
  const footerHtml = $('.elementor-1386').prop('outerHTML') || '';
  fs.writeFileSync('src/data/footer.html', footerHtml);
  console.log(`✓ Footer extracted: ${footerHtml.length} chars`);

  // 4. Video popup
  const videoPopup = $('#wcf-aae-global--popup-js').prop('outerHTML') || '';
  fs.writeFileSync('src/data/video-popup.html', videoPopup);
  console.log(`✓ Video popup extracted: ${videoPopup.length} chars`);

  // 5. Scroll to top
  const scrollToTop = $('.wcf-scroll-to-top').prop('outerHTML') || '';
  fs.writeFileSync('src/data/scroll-to-top.html', scrollToTop);
  console.log(`✓ Scroll to top extracted: ${scrollToTop.length} chars`);

  // 6. Scripts & inline scripts
  const inlineScripts = [];
  $('script').each((i, el) => {
    const content = $(el).html();
    const src = $(el).attr('src');
    if (content && (content.includes('elementor') || content.includes('wcf') || content.includes('starter_animations') || content.includes('gsap'))) {
      inlineScripts.push(content);
    }
  });
  fs.writeFileSync('src/data/inline-scripts.json', JSON.stringify(inlineScripts, null, 2));
  console.log(`✓ Saved ${inlineScripts.length} relevant inline scripts`);
}

extract();
