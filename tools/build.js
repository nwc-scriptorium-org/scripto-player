const fs = require('fs');
const browserify = require('browserify');
//const gzipme = require('gzipme');
//const argv = require('minimist')(process.argv.slice(2));

let outFolder = './build';

//if (fs.existsSync(outFolder)) fs.rmdirSync(outFolder, { recursive: true });
//fs.mkdirSync(outFolder);

var b = browserify('src/index.js');
//b.transform('brfs');
b.bundle().pipe(fs.createWriteStream(`${outFolder}/scripto-player.js`));
b.transform("uglifyify", {global:true});
b.bundle().pipe(fs.createWriteStream(`${outFolder}/scripto-player.min.js`));
