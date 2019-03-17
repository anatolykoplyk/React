let path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  devtool: 'source-map',

  devServer: {
    inline: true,
    contentBase: 'src',
    port: '8080',
  }
});