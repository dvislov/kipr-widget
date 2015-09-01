var path = require('path');
var webpack = require('webpack');

var postcss   = require('postcss');
var autoprefixer = require('autoprefixer');
var atImport = require('postcss-import');
var postCSSNested = require('postcss-nested');
var classPrfx = require('postcss-class-prefix');
var classPrfx = require('postcss-class-prefix');
var postcssTriangle = require('postcss-triangle');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    },
    {
      test: /\.svg$/,
      loader: 'url-loader?limit=8192'
    }]
  },
  postcss: function () {
    return [
      postcssTriangle(),
      autoprefixer({
        browsers: ['last 2 versions']
      }),
      classPrfx('kipr-'),
      atImport({
        from: './src/styles/app.css'
      }),
      postCSSNested()
    ];
  }
};
