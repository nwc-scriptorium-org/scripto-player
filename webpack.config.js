const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	entry: './src/index.js',
    externals: {
        jquery: 'jQuery'
	},
	output: {
		filename: 'midi-player.js',
		path: path.resolve(__dirname, 'dist')
	},
    module: {
        rules: [
		]
	},
    plugins: [
		new CompressionPlugin({
			test: /\.(js|pat)$/i
		}),
		new webpack.ProvidePlugin({
            $: "jquery"
        })
	]
};
