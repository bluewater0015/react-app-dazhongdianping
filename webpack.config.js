//webpack.config.js
var webpack = require("webpack");
var OpenBrowserPlugin = require("open-browser-webpack-plugin");
module.exports = {
	entry: [
		"webpack-dev-server/client?http://localhost:8080/",
		"./src/index.js",
	],
	output: {
		path: __dirname + /dist/,
		filename: "bundle.js"
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin(
	    	{ 
	    		url: 'http://localhost:8080' 
	    	}
	    ),
	    new webpack.ProvidePlugin({
            $: 'jquery'
        })
	],
	devServer:{
		// proxy: {
		// 	'*': {
		// 		target: 'http://datainfo.duapp.com',
		// 		secure: false
		// 	}
		// },
		historyApiFallback:true,
		hot:true,
		inline:true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: "style-loader!css-loader",
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
		          presets: ['es2015', 'react']
		        }
			},
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader",
			},
			{
				test: /\.(png|jpg|gif|svg)$/i,
				loader: [
					'url-loader?limit=1000&name=img/[name]-[hash:5].[ext]',
					'image-webpack-loader'
				]
			},
			{
				test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
				loader: [
					'url-loader?limit=5000'
				]	
			}
		]
	},

}