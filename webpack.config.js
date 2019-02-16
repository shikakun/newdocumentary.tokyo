const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const globImporter = require('node-sass-glob-importer');
const path = require('path');

module.exports = [
  {
    entry: {
      script: './assets/scripts/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'docs'),
      filename: '[name].js'
    },
    module: {
      rules: [{
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', ]
          }
        }],
        exclude: /node_modules\/(?!(dom7|ssr-window)\/).*/,
      }]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ]
  },
  {
    entry: {
      style: './assets/styles/style.scss'
    },
    output: {
      path: path.resolve(__dirname, 'docs'),
      filename: '[name].css'
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              url: false
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('cssnano')({
                  preset: 'default'
                }),
                require('autoprefixer')({
                  grid: true
                })
              ]
            }
          }, {
            loader: 'sass-loader',
            options: {
              importer: globImporter()
            }
          }]
        })
      }]
    },
    plugins: [
      new ExtractTextPlugin('style.css')
    ]
  }
]
