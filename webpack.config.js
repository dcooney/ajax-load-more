const defaults = require('@wordpress/scripts/config/webpack.config');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	entry: {
		'frontend/ajax-load-more': './src/frontend/js/ajax-load-more.js',
		'admin/index': './src/admin/js/index.js',
	},
	output: {
		path: path.join(__dirname, 'build'),
		assetModuleFilename: (pathData) => {
			const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
			return `${filepath}/[name][ext]`;
		},
		library: 'ajaxloadmore',
		libraryTarget: 'var',
	},
	module: {
		rules: [
			{
				test: /\.(webp|png|jpe?g|gif)$/,
				type: 'asset/resource',
			},
			{
				test: /\.(scss|css)$/,
				exclude: '/node_modules',
				use: [
					'style-loader',
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							esModule: false,
						},
					},
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		...defaults.plugins,

		new MiniCssExtractPlugin(),

		/**
		 * Copy source files/directories to a build directory.
		 *
		 * @see https://www.npmjs.com/package/copy-webpack-plugin
		 */
		new CopyPlugin({
			patterns: [
				{
					from: 'src/frontend/img/placeholder.png',
					to: 'frontend/img/placeholder.png',
					noErrorOnMissing: true,
				},
			],
		}),

		/**
		 * Report JS warnings and errors to the command line.
		 *
		 * @see https://www.npmjs.com/package/eslint-webpack-plugin
		 */
		// new ESLintPlugin(),

		/**
		 * Report css warnings and errors to the command line.
		 *
		 * @see https://www.npmjs.com/package/stylelint-webpack-plugin
		 */
		//new StylelintPlugin(),
	],
};
