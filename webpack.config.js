const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
	  Workflow: './src/main/webapp/WEB-INF/js/WorkflowApp.js',
	  Forms: './src/main/webapp/WEB-INF/js/FormsApp.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            compact: false,
            presets: ['babel-preset-es2015'],
            plugins: ['babel-plugin-transform-node-env-inline']
          }
        }
      },
      {
		test: /\.scss$/,
		use: [
			{
				loader: "style-loader"
			}, 
			{
				loader: "css-loader"
			}, 
			{
				loader: "sass-loader"
			}
		]
      }
    ]
  },
  externals: [
    {
      xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
    }
  ],
  devtool: 'cheap-module-source-map',
  output: {
	library: '[name]',
	libraryTarget: 'this',
	filename: './src/main/resources/static/build/[name].js'
  },
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
  resolve: {
    mainFields: [
      'module',
      'webpack',
      'browser',
      'web',
      'browserify',
      [
        'jam', 'main'
      ],
      'main'
    ]
  }
};