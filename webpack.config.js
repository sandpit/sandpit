var path = require('path')

var config = {
  entry: [
    'babel-polyfill',
    './src/Sandpit.js'
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'sandpit.js',
    library: 'Sandpit',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  }
}

module.exports = config
