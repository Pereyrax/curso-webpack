const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // listar los loaders
      {
        // test: tipo de archivo a reconocer,
        // use: loader encargado del archivo
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
      }
    ]
  },
  plugins: [
    // si solo hay un entry point, el nombre del css sera main.css
    new ExtractTextPlugin('css/[name].css')
  ]
}

module.exports = config
