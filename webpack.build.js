const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const {src, dist, main, index, vendor} = require('./paths')

module.exports = {
  devtool: 'cheap-module-source-map',
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

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: [{loader: 'babel-loader'}]
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new CleanWebpackPlugin([dist], {dry: true, verbose: true}),
    new HtmlWebpackPlugin({template: index}),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      sourceMap: true,
      compress: {warnings: false},
      output: {comments: false}
    })
  ]
}
