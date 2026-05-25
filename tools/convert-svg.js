const sharp = require('sharp');
const fs = require('fs');

// Read the SVG file
const svgBuffer = fs.readFileSync('sbb-face.svg');

// Convert to PNG at different sizes for different Pebble platforms
// Using "fit: contain" to ensure the full circle is visible with padding if needed
// Platform screen sizes from hardware information:
// - Aplite: 144x168, BW, Rectangle
// - Basalt: 144x168, Color, Rectangle
// - Chalk: 180x180, Color, Round
// - Diorite: 144x168, BW, Rectangle
// - Emery: 200x228, Color, Rectangle
// - Flint: 200x228, Color, Round
// - Gabbro: 260x260, Color, Round
const sizes = [
  // Aplite: 144x168, BW
  { name: 'round-aplite', width: 144, height: 168, fit: 'contain' },
  // Basalt: 144x168, Color
  { name: 'round-color', width: 144, height: 168, fit: 'contain' },
  // Chalk: 180x180, Round, Color
  { name: 'round-chalk', width: 180, height: 180, fit: 'contain' },
  // Diorite: 144x168, BW
  { name: 'round-diorite', width: 144, height: 168, fit: 'contain' },
  // Emery: 200x228, Color
  { name: 'round-emery', width: 200, height: 228, fit: 'contain' },
  // Flint: 200x228, Color, Round
  { name: 'round-flint', width: 200, height: 228, fit: 'contain' },
  // Gabbro: 260x260, Color, Round
  { name: 'round-gabbro', width: 260, height: 260, fit: 'contain' },
];

async function convert() {
  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size.width, size.height, { fit: size.fit, background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(`../resources/images/sbb-face-${size.name}.png`);
    console.log(`Created sbb-face-${size.name}.png`);
  }
  console.log('Conversion complete!');
}

convert().catch(console.error);
