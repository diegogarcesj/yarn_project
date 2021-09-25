const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: {
      directory: path.join(__dirname, ''),
    }
  },
  output: {
    filename: 'bundle.js'
  }
};
