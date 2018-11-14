let webpack = require('webpack');
let path = require('path');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    context: path.join(__dirname, "src"),
    mode:"production",
    devtool: "source-map",
    entry: "./js/client.js",
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    babelrc: false,
                    presets: ['react', 'env', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.txt$/,
                loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },            
            {
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[path][name].[ext]?[hash:8]'
                }
            },
            {
                test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    name: '[path][name].[ext]?[hash:8]',
                    limit: 10000
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
        }]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "client.min.js"
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    mangle: true,
                    compress: {
                        warnings: false, // Suppress uglification warnings
                        pure_getters: true,
                        unsafe: true,
                        unsafe_comps: true,
                        screw_ie8: true
                    },
                    output: {
                        comments: false,
                    }
                },
                sourceMap:true,
                exclude: [/\.min\.js$/gi] // skip pre-minified libs
            })
        ]
    },
    plugins:  [
        // Important for production mode
        // if this is set react takes a smaller version
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                'NODE_ENV': JSON.stringify('production'),
            }
        }),
        // Ignore plugins which we don't need in production mode
        // locale is implmeneted in webpack/react but we don't need it
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        // Canvas isnt necessary because canvas is implemented in the browser
        new webpack.IgnorePlugin(/canvas|jsdom/, /konva/),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
};