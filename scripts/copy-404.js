/**
 * Copies index.html to 404.html for GitHub Pages SPA support.
 * When a user navigates directly to a route (e.g. /resume), GitHub Pages
 * serves 404.html. By making it identical to index.html, the React app
 * loads and the router renders the correct page.
 */
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const src = path.join(buildDir, 'index.html');
const dest = path.join(buildDir, '404.html');

fs.copyFileSync(src, dest);
console.log('Copied index.html to 404.html for GitHub Pages SPA routing');
