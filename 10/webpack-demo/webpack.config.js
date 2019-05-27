const path = require('path');
// vue loader plugin 需要依赖 vue-template-compiler
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    // 
    entry: {
        app: path.resolve('src', 'main.js'),
        // test1: path.resolve('src', 'test.js')
    },
    output: {
        path: path.resolve('dist'),
        // 入口对象的key作为 生产后文件名称
        filename: '[name].js',
        // library: 'aquery',
        // umd 通用的模块规范 既可以在 nodejs里使用
        // 也可以在 网页里使用
        libraryTarget: "umd2"

    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader', 'less-loader']
            },
            {
                // es6之后的js不会编译 babel
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ],
    },
    devServer: {
        port: 8080,
        // 自动打开页面
        open: true
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve('public', 'index.html')
        })
    ],
    // development 开发模式编译起来比较快， 不会压缩js文件
    mode: 'development', // production
}

// nodejs 的模块语法使用 commonjs commonjs2
// exports
// module.exports
// 如果你开发的是一个nodejs 的项目比如一个服务器 希望也用webpack来编译
// 你可以设置 libraryTarget: "commonjs2"