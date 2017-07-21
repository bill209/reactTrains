var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'
		],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			About: 'app/components/About.jsx',
			Examples: 'app/components/Examples.jsx',
			Trains: 'app/components/Trains.jsx',
			TrainList: 'app/components/TrainList.jsx',
			TrainDetail: 'app/components/TrainDetail.jsx',
			TrainPic: 'app/components/TrainPic.jsx',
			trainsSvc: 'app/api/trainsSvc.jsx',
			openWxMap: 'app/api/openWxMap.jsx',
			WeatherForm: 'app/components/WeatherForm.jsx',
			WeatherMsg: 'app/components/WeatherMsg.jsx',
			ErrorModal: 'app/components/ErrorModal.jsx',
			apiKey: 'app/apiKey.js',
			trainData: 'app/api/trainData.jsx'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-devtool-map'
};