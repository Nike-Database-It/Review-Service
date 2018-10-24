var path = require('path');
var client_dir = path.join(__dirname, '/client');
var public_dir = path.join(__dirname, '/public');

module.exports = {
  entry: `${client_dir}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: public_dir
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : client_dir,
        loader : 'babel-loader',      
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  }
};