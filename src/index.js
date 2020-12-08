const ScriptoPlayer = require('./ScriptoPlayer');

var player = null;

window.ScriptoPlayer = function() {
	if (!player) player = new ScriptoPlayer();
	return player;
}
