const path = require('path')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './')
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: [
          'es2015'
        ],
        plugins: []
      },
      include: [
        path.resolve(__dirname, './')
      ]
    }, {
      test: /\.styl$/,
      include: __dirname + '/src',
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader',
        options: { sourceMap: true }
      }, {
        loader: 'css-loader',
        options: {
          localIdentName: '[name]-[local]',
          modules: true,
          sourceMap: true
        }
      }, {
        loader: 'stylus-loader',
        options: { sourceMap: true }
      }]
    }]
  },
  plugins: [
    new MinifyPlugin()
  ]
}
