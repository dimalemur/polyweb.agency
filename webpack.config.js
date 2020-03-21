const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const autoprefixer = require('autoprefixer')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    context: __dirname + '/src',
    mode: 'development',
    entry: {
        main: './client/js/index.js',
        min: './client/js/wow.min.js',
    },
    output: {
        path: __dirname + '/public/build/',
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            // Стили
            {
                test: /\.(pcss|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },

                ]
            },
            // JS файлы
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: [/node_modules/, /public/]
            },
            // Картинки и шрифты для css
            {
                test: /\.(png|jpg|svg|gif|otf|ttf|eot)$/,
                use: "file-loader",

            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.pcss'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',

        }),
        new HTMLWebpackPlugin({
            template: __dirname + '/src/client/index.html'
        }),

        new CopyWebpackPlugin([
            {
                from: __dirname + '/src/source/favicon/logo.png',
                to: __dirname + '/public/icons/'
            },
            {
                from: __dirname + '/src/source/images/html-images/',
                to: __dirname + '/public/images/'
            }
        ])
    ]
}