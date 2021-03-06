var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/js/foundation.min.js',
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
			Trains: 'app/components/Trains.jsx',
			TrainList: 'app/components/TrainList.jsx',
			TrainDetail: 'app/components/TrainDetail.jsx',
			TrainPic: 'app/components/TrainPic.jsx',
			Tool: 'app/components/Tool.jsx',
			dataSvc: 'app/api/dataSvc.jsx',
			ErrorModal: 'app/components/ErrorModal.jsx',
			trainData: 'app/api/trainData.jsx',
			toolData: 'app/api/toolData.jsx',
			appStyles: 'app/styles/main.css'
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