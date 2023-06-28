const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

/**
 * Webpack config (Production mode)
 * Only create .min file of core ALM script.
 *
 * @see https://webpack.js.org/guides/production/
 */
const config = {
	watch: false,
	entry: {
		'frontend/ajax-load-more.min': './src/frontend/js/ajax-load-more.js',
	},
	output: {
		path: path.join(__dirname, 'build'),
		library: 'ajaxloadmore',
		libraryTarget: 'var',
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
};

module.exports = config;
