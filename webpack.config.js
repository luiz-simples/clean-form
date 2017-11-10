const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const {src, dist, main, index, vendor} = require('./paths')

module.exports = {
  devtool: 'eval',
  target: 'web',

  entry: {
    main,
    vendor
  },

  output: {
    path: dist,
    filename: 'static/[name].[chunkhash:5].js',
    chunkFilename: 'static/[name].[chunkhash:5].js'
  },

  resolve: {
    modules: [src, 'node_modules']
  },

  devServer: {
    port: '8080',
    host: '0.0.0.0',
    stats: 'errors-only',
    contentBase: dist,
    historyApiFallback: true
  },

  module: {
    rules: [{
      enforce: 'pre',
      test: /\.(js)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {failOnWarning: true, failOnError: true}
    }, {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: [{loader: 'babel-loader'}]
    }]
  },

  plugins: [
    new CleanWebpackPlugin([dist], {dry: true, verbose: true}),
    new webpack.optimize.CommonsChunkPlugin('vendor'),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),

    new HtmlWebpackPlugin({template: index})
  ]
}
