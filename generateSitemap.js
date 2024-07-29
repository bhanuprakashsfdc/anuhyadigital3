import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cities from './src/data/cites.js'; // Adjust the path as necessary
import keywords from './src/data/webkeywords.js'; // Adjust the path as necessary

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const websiteUrl = 'https://www.anuhyadigital.com';
const maxLines = 10000;

const generateSitemap = () => {
  const pages = [
    { loc: `${websiteUrl}/`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 1.0 },
    { loc: `${websiteUrl}/about-us.html`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: `${websiteUrl}/contact-us.html`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: `${websiteUrl}/privacy-policy.html`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: `${websiteUrl}/terms-conditions.html`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
  ];

  const dynamicPages = cities.flatMap(city => {
    const formattedCity = city.toLowerCase().replace(/ /g, '-');
    return keywords.map(keyword => {
      const formattedKeyword = keyword.toLowerCase().replace(/ /g, '-');
      return {
        loc: `${websiteUrl}/${formattedKeyword}-${formattedCity}.html`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8
      };
    });
  });

  const urls = [...pages, ...dynamicPages];
  const sitemapIndex = [];

  let urlEntries = '';
  let fileCount = 1;
  let lineCount = 0;

  const writeSitemapFile = (content, count) => {
    const filename = `sitemap${count}.xml`;
    const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${content}
      </urlset>
    `;
    fs.writeFileSync(path.join(__dirname, 'public', filename), sitemap.trim());
    sitemapIndex.push(filename);
  };

  urls.forEach(url => {
    const urlEntry = `
      <url>
        <loc>${url.loc}</loc>
        <lastmod>${url.lastmod}</lastmod>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
      </url>
    `;
    urlEntries += urlEntry;
    lineCount += urlEntry.split('\n').length;

    if (lineCount >= maxLines) {
      writeSitemapFile(urlEntries, fileCount);
      fileCount++;
      urlEntries = '';
      lineCount = 0;
    }
  });

  if (urlEntries) {
    writeSitemapFile(urlEntries, fileCount);
  }

  const sitemapIndexContent = sitemapIndex.map(file => `
    <sitemap>
      <loc>${websiteUrl}/public/${file}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
  `).join('');

  const sitemapIndexFile = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapIndexContent}
    </sitemapindex>
  `;

  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap-index.xml'), sitemapIndexFile.trim());
};

generateSitemap();
