const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const config = merge(common, {
	entry: {
		'frontend/ajax-load-more': './src/frontend/js/ajax-load-more.js',
		'frontend/ajax-load-more.min': './src/frontend/js/ajax-load-more.js',
		'admin/index': './src/admin/js/index.js',
	},
	optimization: {
		minimize: true,
		minimizer: [
			/**
			 * Minify JS.
			 *
			 * @see https://webpack.js.org/plugins/terser-webpack-plugin/
			 */
			new TerserPlugin({
				extractComments: false,
				test: /\.min.js(\?.*)?$/i,
			}),

			/**
			 * Minify CSS.
			 *
			 * @see https://webpack.js.org/plugins/css-minimizer-webpack-plugin/
			 */
			new CssMinimizerPlugin({
				minimizerOptions: {
					preset: [
						'default',
						{
							discardComments: { removeAll: true },
						},
					],
				},
			}),
		],
	},
});

module.exports = config;
