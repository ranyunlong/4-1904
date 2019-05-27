# vue-cli

### 安装
```shell
npm i -g @vue/cli
```

### vue-cli的作用

1. 是用来快速生成vue项目脚手架

这个项目脚手架 webpack来构建的 依赖webpack打包

### 使用vue-cli来创建项目

```shell
vue create 你的项目名称
# 例如创建一个my-app项目
# 使用命令行来配置项目
vue create my-app

# 使用网页来配置项目
vue ui
```


### vue-cli 创建项目的模式

创建项目的模式有3种

1. 使用typescript 来开发项目
2. 使用js开发项目 默认配置
3. 手动创建


vue-loader

vue-loader 会把 一个*.vue的编译成一个js对象
它用处理vue文件

1. template 会被vue的render函数直接渲染
```html
<template></template>
```
2. script部分
```js
<script></script>
```

里面用es6 export defalut导出的对象 会被直接合并上上面的template 然后 生成一个局部组件对象

3. style 部分
```html
<style></style>
```
style部分会被直接生成为css样式添加到页面的head里

### 练习

1. 按照今天讲解的步骤 把vue的开发环境搭建出来
2. 理解 vue单文件组件的处理（怎么处理成vue可以对接的东西）
3. 熟悉vue 的render选项 createElement 函数


4. 尝试使用vue-cli来创建项目