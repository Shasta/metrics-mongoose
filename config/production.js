const path = require('path');
const webpack = require('webpack');

module.exports = function (env) {
  return {
    externals: {
      'mongoose': 'mongoose'
    },
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/../dist/'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        libraryTarget: 'umd',
        library: 'metrics-mongoose',
    },
    module: {
      loaders: [{
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        test: /\.js$/,
      }],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
    ]
  }
}
