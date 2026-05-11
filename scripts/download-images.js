const https = require('https');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'src', 'assets', 'images');
const publicImagesDir = path.join(__dirname, '..', 'public', 'images');

// Create directories
[imagesDir, publicImagesDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const images = [
  // Home.jsx dish images
  { url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80', filename: 'tandoori.jpg' },
  { url: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80', filename: 'pasta.jpg' },
  { url: 'https://images.unsplash.com/photo-1551024601-bec78aea11b0?w=800&q=80', filename: 'dessert.jpg' },
  { url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80', filename: 'pizza.jpg' },
  { url: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800&q=80', filename: 'fries.jpg' },
  { url: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80', filename: 'sushi.jpg' },
  
  // Menu.jsx dish images
  { url: 'https://images.unsplash.com/photo-1572695157363-95a7061ad337?w=800&q=80', filename: 'bruschetta.jpg' },
  { url: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800&q=80', filename: 'caesar-salad.jpg' },
  { url: 'https://images.unsplash.com/photo-1577906096429-f73c2c91d2c6?w=800&q=80', filename: 'spinach-dip.jpg' },
  { url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80', filename: 'wagyu-burger.jpg' },
  { url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80', filename: 'grilled-salmon.jpg' },
  { url: 'https://images.unsplash.com/photo-1551183053-bf91b1dca034?w=800&q=80', filename: 'lobster-pasta.jpg' },
  { url: 'https://images.unsplash.com/photo-1606471191009-63994c0f5f5f?w=800&q=80', filename: 'palak-paneer.jpg' },
  { url: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80', filename: 'lava-cake.jpg' },
  { url: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80', filename: 'tiramisu.jpg' },
  { url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80', filename: 'fruit-tart.jpg' },
  { url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80', filename: 'craft-cocktail.jpg' },
  { url: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&q=80', filename: 'fresh-juice.jpg' },
  { url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80', filename: 'wine.jpg' },
  
  // public banner image (with space in name)
  { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80', filename: '../public/images/banner image.jpg' },
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        https.get(response.headers.location, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

(async () => {
  for (const img of images) {
    const filepath = path.join(imagesDir, img.filename);
    try {
      if (fs.existsSync(filepath) && fs.statSync(filepath).size > 1000) {
        console.log(`Skipping ${img.filename} (already exists)`);
        continue;
      }
      console.log(`Downloading ${img.filename}...`);
      await downloadImage(img.url, filepath);
      console.log(`Done: ${img.filename}`);
    } catch (err) {
      console.error(`Failed ${img.filename}:`, err.message);
    }
  }
  console.log('All downloads complete!');
})();
