import fs from 'fs';
import path from 'path';

const header = fs.readFileSync('src/data/header.html', 'utf8');
const main = fs.readFileSync('src/data/main.html', 'utf8');
const footer = fs.readFileSync('src/data/footer.html', 'utf8');
const scrollToTop = fs.readFileSync('src/data/scroll-to-top.html', 'utf8');
const videoPopup = fs.readFileSync('src/data/video-popup.html', 'utf8');

const content = `// Auto-generated exact HTML templates from Arolax Web Design Agency
export const headerHTML = ${JSON.stringify(header)};
export const mainHTML = ${JSON.stringify(main)};
export const footerHTML = ${JSON.stringify(footer)};
export const scrollToTopHTML = ${JSON.stringify(scrollToTop)};
export const videoPopupHTML = ${JSON.stringify(videoPopup)};
`;

fs.writeFileSync('src/data/arolax-html.ts', content);
console.log('✓ Successfully created src/data/arolax-html.ts!');
