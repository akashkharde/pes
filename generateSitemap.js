// generateSitemap.js
const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

const routes = [
  '/',
  '/about',
  '/service',
  '/work',
  '/lifeAtPSE',
  '/why-us',
  '/contact'
];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://pnaqengg.com/' });
  routes.forEach(route => {
    sitemap.write({ url: route, changefreq: 'daily', priority: 0.8 });
  });
  sitemap.end();

  try {
    const data = await streamToPromise(sitemap);
    fs.writeFileSync('./public/sitemap.xml', data.toString());
    console.log('Sitemap successfully created!');
  } catch (err) {
    console.error('Error generating sitemap:', err);
  }
};

generateSitemap();
