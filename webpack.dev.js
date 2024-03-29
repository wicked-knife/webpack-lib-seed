const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConf = require('./webpack.common.js')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const devConf = {
  entry: {
    index: path.resolve(__dirname, 'demo/index.js')
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: 'dist',
    open: true,
    hot: true,
    overlay: true,
    proxy: {
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'demo/index.html')
    })
  ]
}

module.exports = merge(commonConf, devConf)
