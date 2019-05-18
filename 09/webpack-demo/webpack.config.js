//它是在nodejs 里运行的
const path = require('path');
// https://www.npmjs.com/package/html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口配置
    entry: path.resolve('src', 'index.js'),

    // 输出目录
    output: {
        path: path.resolve('dist'),
        filename: 'app.js'
    },

    // 用来解析模块的配置
    // 在webpack里所有的文件都会被当做模块来处理
    // 不同的模块需要不同的处理器来处理 处理器的概念叫loader 加载器
    module: {
        // 定制加载器的处理规则
        // 一个正则表达式配一个加载器
        rules: [
            {
                test: /\.css$/,
                // 处理css 有以下几个加载器
                // 1. style-loader 样式加载器 他是用于把编译好的样式 自动添加到dom中
                // 2. css-loader 用来编译css的
                // 多个加载器用数组 单个加载器用字符串
                // loader 不是webpack自带的 需要单独安装 安装到项目里 不是全局安装
                // webpack会自动在项目的node_modules目录里找那个模块
                use: ['style-loader', 'css-loader']
            },
            {
                // 只要是less文件就会被处理
                test: /\.less$/,
                // 需要安装less 以及less-loader到项目里
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },

    // 添加html模板模块
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('public', 'index.html')
        })
    ],

    // 配置开发服务器
    devServer: {
        port: 8090
    },

    // 编译模式
    mode: 'development', // production 生产模式 development 开发模式
}