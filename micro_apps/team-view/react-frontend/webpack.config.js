const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry: ["./src/fragment2.jsx", "./src/fragment.jsx"],
	mode: "production",
	module: {
		rules: [
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env", "@babel/preset-react"],
							plugins: [["@babel/plugin-proposal-class-properties"]]
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"]
	},
	output: {
		path: path.resolve(__dirname, "static"),
		publicPath: "/static/",
		filename: "view.js"
	}
};
