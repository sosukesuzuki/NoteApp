const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.pug$/,
      exclude: /node_modules/,
      use: 'pug-loader'
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        stylus: {
          use: [require('nib')()],
          import: ['~nib/lib/nib/index.styl']
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    })
  ]
}
