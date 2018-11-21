const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const context = resolve(__dirname, 'src');

module.exports = {
	entry: {
		app: ['@babel/polyfill', './']
	},

	context,

	module: {
		rules: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				include: context
			},

			{
				test: /.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},

	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css']
	},

	plugins: [new HtmlPlugin()]
};
