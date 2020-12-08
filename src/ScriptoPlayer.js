const Timidity = require('timidity');
const Debug = require('debug');
const debug = Debug('timidity');
const debugVerbose = Debug('timidity:verbose');

const defaultOpts = { patUrl: 'pa2/' };

class ScriptoPlayer extends Timidity {
	constructor(options = {}) {
		options = Object.assign({},defaultOpts,options);
		super(options);
	}
}

module.exports = ScriptoPlayer;
