var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },

    devtool: 'source-map',

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

    plugins: [new HtmlWebpackPlugin()],

    watch: false
};