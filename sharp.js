const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  // mengubah ukuran gambar dengan lebar 1200px, dengan prefix -large.jpg
  sharp(`${target}/${image}`)
    .resize(1200)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`
      )
    );

  // mengubah ukuran gambar dengan lebar 600px, dengan prefix -medium.jpg
  sharp(`${target}/${image}`)
    .resize(720)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`
      )
    );
});
