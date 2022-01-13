const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {

    mode: 'development',

    devtool: 'eval-cheap-module-source-map',

    entry: {
        app: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },

    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.resolve('src'),
            'assets': path.resolve('assets')
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src/'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                type: 'asset/inline'
            },
            {
                test: /\.png$/,
                type: 'asset/resource'
            }
        ]
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'index.html'), to: path.resolve(__dirname, 'build') },
                { from: path.resolve(__dirname, 'assets', '**', '*'), to: path.resolve(__dirname, 'build') }
            ]
        }),
        new webpack.DefinePlugin({
            'typeof CANVAS_RENDERER': JSON.stringify(true),
            'typeof WEBGL_RENDERER': JSON.stringify(true)
        }),
        new VueLoaderPlugin(),
    ],

    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        port: 8080
    },

}