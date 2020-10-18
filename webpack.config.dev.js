/**
 * @file webpack config for dev
 * @author MissyLiu
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname);
const STATIC_PATH = path.resolve(ROOT_PATH, 'src/pages/dashboard');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist/app');

// default port
const PORT = 3000;

module.exports = {
    entry: {
        app: [
            `webpack-dev-server/client?http://localhost:${PORT}`,
            path.resolve(STATIC_PATH, 'index.js')
        ]
    },
    output: {
        path: BUILD_PATH,
        publicPath: '/',
        filename: '[name].js'
    },
    mode: 'development',
    resolve: {
        alias: {
            src: path.resolve(ROOT_PATH, 'src'),
            assets: path.resolve(ROOT_PATH, 'src/assets')
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                loader: 'url-loader?limit=40000&name=[name].[ext]?[hash]'
            },
            {
                test: /\.(docx?|xlsx?|pdf)/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [STATIC_PATH]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(STATIC_PATH, 'index.html')
        })
    ],
    devServer: {
        contentBase: BUILD_PATH,
        host: '0.0.0.0',
        port: PORT,
        compress: true,
        historyApiFallback: true,
        watchOptions: {
            ignored: /node_modules/,
            aggregateTimeout: 300,
            poll: 1000
        },
        overlay: true
    }
};
