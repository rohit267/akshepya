
const sharp = require('sharp');

sharp(__dirname + "a.png")
    .rotate()
    .resize(150, 150)
    .toFile('output.webp', (err, info) => {
        if (err) {
            throw err;
            return;
        }
        console.log(info);
    })