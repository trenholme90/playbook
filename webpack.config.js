const path = require("path");
const dirPath = path.join(__dirname, "/dist");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/js/index.js",
	output: {
		path: dirPath,
		filename: "bundle.js",
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(t|j)s?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.s(a|c)ss$/,
				loader: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
	],
	resolve: {
		extensions: [".js", ".scss"],
	},
};
