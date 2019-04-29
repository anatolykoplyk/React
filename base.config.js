var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },

    plugins: [new HtmlWebpackPlugin(),
    new webpack.EnvironmentPlugin([
        'NODE_ENV',
    ])],

    watch: false
};