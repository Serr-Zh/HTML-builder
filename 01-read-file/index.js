const fs = require('fs');
const pathToFile = require('path');

const ourFile = fs.createReadStream(
  pathToFile.join(__dirname, 'text.txt'),
  'utf-8',
);
ourFile.on('data', (data) => console.log(data));
