'use strict'
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

function resolve(dir) {
 return path.join(__dirname, '..', dir)
}

module.exports = {
 mode: 'development',
 devServer: {
  hot: true,
  watchOptions: {
   poll: true
  },
  stats: {
   colors: true,
   hash: false,
   version: false,
   timings: false,
   assets: false,
   chunks: false,
   modules: false,
   reasons: false,
   children: false,
   source: false,
   publicPath: false
  }
 },
 module: {
  rules: [
   {
    test: /\.vue$/,
    use: 'vue-loader'
   },
   {
    test: /\.css$/,
    use: [
     'vue-style-loader',
     'css-loader'
    ]
   },
   {
    test: /\.js$/,
    use: 'babel-loader'
   },
   {
    test: /\.(js|vue)$/,
    use: 'eslint-loader',
    enforce: 'pre'
   }
  ]
 },
 plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({
   filename: 'index.html',
   template: 'index.html',
   inject: true
  }),
  new CopyWebpackPlugin([{
   from: resolve('static/img'),
   to: resolve('dist/static/img'),
   toType: 'dir'
  }])
 ],
}
