const defaults = require('@wordpress/scripts/config/webpack.config');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

module.exports = {
	entry: {
		'ajax-load-more': './src/frontend/js/ajax-load-more.js',
		'admin/index': './src/admin/js/index.js',
	},
	output: {
		path: path.join(__dirname, 'build'),
		library: 'ajaxloadmore',
		libraryTarget: 'var',
	},
	plugins: [
		...defaults.plugins,
		/**
		 * Report JS warnings and errors to the command line.
		 *
		 * @see https://www.npmjs.com/package/eslint-webpack-plugin
		 */
		new ESLintPlugin(),

		/**
		 * Report css warnings and errors to the command line.
		 *
		 * @see https://www.npmjs.com/package/stylelint-webpack-plugin
		 */
		//new StylelintPlugin(),
	],
};
