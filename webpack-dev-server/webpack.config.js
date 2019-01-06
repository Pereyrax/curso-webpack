const path = require('path');

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 9000
  },
  module: {
    rules: [
      // listar los loaders
      {
        // test: tipo de archivo a reconocer,
        // use: loader encargado del archivo
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  }
}

module.exports = config
