///**
// * Created by Administrator on 2015/4/16.
// */
//var path = require('path');
//var webpack = require('webpack');
//console.log(path.join(__dirname, 'build'));
//module.exports = {
//    entry:[
//        'webpack-dev-server/client?http://localhost:3000',
//        'webpack/hot/only-dev-server',
//        './js/app.js'
//    ],
//    output: {
//        path: path.join(__dirname, 'build'),
//        filename: 'bundle.js',
//        publicPath: '/js/'
//    },
//    plugins: [
//        new webpack.HotModuleReplacementPlugin(),
//        new webpack.NoErrorsPlugin()
//    ],
//    resolve: {
//        extensions: ['', '.js', '.jsx']
//    },
//    module: {
//        loaders: [
//            { test: /\.jsx$/, loader: ['react-hot', 'babel'] }
//        ]
//    }
//}


var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './js/app'
    ],
    output: {
        path: __dirname,
        filename: '/js/bundle.js'

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'js')
        }]
    }
};
