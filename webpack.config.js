const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main/webapp/WEB-INF/js/App.js',
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
    library: 'Dashboard',
    libraryTarget: 'this',
    filename: './src/main/resources/static/build/Dashboard.js'
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