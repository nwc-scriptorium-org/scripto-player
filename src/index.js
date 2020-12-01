const Timidity = require('timidity');

window.ScriptoPlayer = function() {
	return new Timidity({baseUrl: '/bootstrap/timidity/'});
};
