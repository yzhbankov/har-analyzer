var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "client"),
    entry: './main.js',
    output: {
        path: __dirname + '/public/',
        filename: "main.bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.sass$/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    presets: ['react']
                },
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            }
        ]
    }
};