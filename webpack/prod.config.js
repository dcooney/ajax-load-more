const webpack = require('webpack');
const config = require('../webpack.config.js');

config.watch = false;
config.entry = {
	'ajax-load-more.min': './core/src/js/ajax-load-more.js'
};

config.plugins.push(
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"production"'
		}
	})
);
module.exports = config;
