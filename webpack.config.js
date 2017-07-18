var webpack = require('webpack');
module.exports = {
	context: __dirname + '/src/app',
	entry: {
		app: './app.js',
		vendor: ['angular','@uirouter/angularjs','angular-messages']
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].bundle.js'
	},

	module: {
	  rules: [{
	    test: /\.html$/,
	    use: [ {
	      loader: 'html-loader',
	      options: {
	        minimize: true
	      }
	    }],
	  }]
	},

	plugins: [
	    new webpack.optimize.CommonsChunkPlugin({
	        name: 'vendor'
	    })
	]
};
