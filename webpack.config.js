const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const dir = 'core/dist';

module.exports = {
	entry: {
		'ajax-load-more': ['babel-regenerator-runtime', './core/src/js/ajax-load-more.js'],
	},
	output: {
		path: path.join(__dirname, dir),
		filename: 'js/[name].js',
		library: 'ajaxloadmore',
		libraryTarget: 'var',
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: ['babel-loader', 'eslint-loader'],
			},
			{
				test: /\.(jpe?g|gif|png|svg)$/,
				loader: 'file-loader',
				options: {
					name: 'img/[name].[ext]',
					publicPath: '../',
				},
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
				options: {
					name: 'fonts/[name].[ext]',
					publicPath: '../',
				},
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
								outputStyle: 'expanded',
							},
						},
					],
				}),
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new ExtractTextPlugin({ filename: 'css/[name].css' }),
		new webpack.ProvidePlugin({
			ajaxloadmore: 'ajaxloadmore',
		}),
		new CopyPlugin({
			patterns: [{ from: 'core/src/vendor', to: './vendor' }],
		}),
	],
};
