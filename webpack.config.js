var path = require('path');
var webpack = require('webpack');

var postcss   = require('postcss');
var autoprefixer = require('autoprefixer');
var classPrfx = require('postcss-class-prefix');

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
    }]
  },
  postcss: function () {
    return [
      autoprefixer({
        browsers: ['last 2 versions']
      }),
      classPrfx('kipr-')
    ];
  }
};
