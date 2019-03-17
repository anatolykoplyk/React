let path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'main.js'
  }
});