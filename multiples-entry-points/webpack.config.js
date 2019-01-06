const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  mode: 'development',
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    precios: path.resolve(__dirname, 'src/js/precios.js'),
    contacto: path.resolve(__dirname, 'src/js/contacto.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // poniendo el output dentro de carpeta js con su respectivo nombre
    filename: 'js/[name].js'
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
