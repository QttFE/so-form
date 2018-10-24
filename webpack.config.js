const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
// const ExtractTextWebapckPlugin = require('extract-text-webpack-plugin') //引入插件
const webpack = require('webpack')

module.exports = {
  entry: './src/install.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'q-form.min.js',
    library: 'q-form',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx',  '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // css: ExtractTextWebapckPlugin.extract({ use: 'css-loader' })
          }
        }
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  // optimization: {
  //   runtimeChunk: {
  //     name: 'manifest'
  //   },
  //   minimizer: true
  // },

  plugins: [new VueLoaderPlugin()]
}
