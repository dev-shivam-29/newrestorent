const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'assets', 'images');
const publicDir = path.join(__dirname, '..', 'public', 'images');
const assetsDir = path.join(__dirname, '..', 'src', 'assets');

// Ensure images directory exists
if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir, { recursive: true });
}

const copies = [
  // Home.jsx images
  { src: path.join(publicDir, 'about-hero.jpg'), dest: path.join(srcDir, 'tandoori.jpg') },
  { src: path.join(publicDir, 'ambience.jpg'), dest: path.join(srcDir, 'pasta.jpg') },
  { src: path.join(publicDir, 'chef-profile.jpg'), dest: path.join(srcDir, 'dessert.jpg') },
  { src: path.join(assetsDir, 'menuPizza.jpg'), dest: path.join(srcDir, 'pizza.jpg') },
  { src: path.join(publicDir, 'fresh-ingredients.jpg'), dest: path.join(srcDir, 'fries.jpg') },
  { src: path.join(publicDir, 'sustainability.jpg'), dest: path.join(srcDir, 'sushi.jpg') },

  // Menu.jsx images
  { src: path.join(publicDir, 'hospitality.jpg'), dest: path.join(srcDir, 'bruschetta.jpg') },
  { src: path.join(publicDir, 'quality.jpg'), dest: path.join(srcDir, 'caesar-salad.jpg') },
  { src: path.join(publicDir, 'family.jpg'), dest: path.join(srcDir, 'spinach-dip.jpg') },
  { src: path.join(publicDir, 'indoor.jpg'), dest: path.join(srcDir, 'wagyu-burger.jpg') },
  { src: path.join(publicDir, 'outdoor.jpg'), dest: path.join(srcDir, 'grilled-salmon.jpg') },
  { src: path.join(publicDir, 'private.jpg'), dest: path.join(srcDir, 'lobster-pasta.jpg') },
  { src: path.join(publicDir, 'ambience-dining.jpg'), dest: path.join(srcDir, 'palak-paneer.jpg') },
  { src: path.join(publicDir, 'ambience-terrace.jpg'), dest: path.join(srcDir, 'lava-cake.jpg') },
  { src: path.join(assetsDir, 'hero.jpg'), dest: path.join(srcDir, 'tiramisu.jpg') },
  { src: path.join(publicDir, 'about-hero.jpg'), dest: path.join(srcDir, 'fruit-tart.jpg') },
  { src: path.join(publicDir, 'chef-profile.jpg'), dest: path.join(srcDir, 'craft-cocktail.jpg') },
  { src: path.join(publicDir, 'sustainability.jpg'), dest: path.join(srcDir, 'fresh-juice.jpg') },
  { src: path.join(publicDir, 'hospitality.jpg'), dest: path.join(srcDir, 'wine.jpg') },

  // Menu hero - copy menuPizza for the hero background (menupizza.jpg)
  { src: path.join(assetsDir, 'menuPizza.jpg'), dest: path.join(srcDir, 'menupizza.jpg') },
];

copies.forEach(({ src, dest }) => {
  try {
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      const srcSize = fs.statSync(src).size;
      console.log(`Copied: ${path.basename(src)} -> ${path.basename(dest)} (${(srcSize/1024).toFixed(1)} KB)`);
    } else {
      console.error(`Missing source: ${src}`);
    }
  } catch (err) {
    console.error(`Failed to copy to ${dest}:`, err.message);
  }
});

console.log('\nDone! All images copied to src/assets/images/');
