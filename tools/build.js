const fs = require('fs');
const browserify = require('browserify');
const gzipme = require('gzipme');
//const argv = require('minimist')(process.argv.slice(2));

function BuildBundle() {
	//if (fs.existsSync(outFolder)) fs.rmdirSync(outFolder, { recursive: true });
	//fs.mkdirSync(outFolder);

	let b = browserify('src/index.js');
	let rawFN = `./build/scripto-player.js`;
	let rawOutFile = fs.createWriteStream(rawFN);

	rawOutFile.on('finish',() => gzipme(rawFN, {mode:'best', output: `${rawFN}.gz`}));

	b.transform("uglifyify", {global:true});
	b.bundle().pipe(rawOutFile);
}

BuildBundle();
