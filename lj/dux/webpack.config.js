const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: [
		"babel-polyfill",
		"./src/index.js"
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			}, 
			{
				test: /\.(css)$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx", "*"]
	},
	output: {
		path: __dirname + "/dist",
		publicPath: "/",
		filename: "bundle.js"
	},
	plugins: [
		new Dotenv()
	],
	devServer: {
		contentBase: "./dist",
		port: 3000,
		historyApiFallback: true
	}
}