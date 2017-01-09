var path = require('path')

var config = {
  entry: './lib/Sandpit.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'sandpit.js',
    library: 'Sandpit',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    root: path.resolve('./lib'),
    extensions: ['', '.js']
  }
}

module.exports = config
