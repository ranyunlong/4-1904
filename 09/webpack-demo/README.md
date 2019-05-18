# 使用方式

## 1. 安装webpack

```shell
npm i -g webpack webpack-cli
npm i -g webpack-dev-server
```

### webpack
编译生产工具

### webpack-cli
命令行工具

### webpack-dev-server
帮助你创建一个开发服务器， 带热更新功能


## 2. 创建一个编译配置

webpack.config.js

```js
module.exports = {
    // .... webpack的配置
}
```

配置文件是用来协助webpack知道编译哪些文件 编译成什么样子的文件

## 3. html-webpack-plugin

这个是webpack的一个插件
这个插件 允许你添加一个模板，然后他自动把编译好的js 和css添加到你的页面里

## webpack-dev-server

webpack的一个开发服务器
可以自动刷新页面更新页面

```shell
npm i -g webpack-dev-server
npm i webpack
```

如果要使用webpack-dev-server 需要在本地 安装 webpack

使用
```shell
webpack-dev-server 
# 启动项目
```