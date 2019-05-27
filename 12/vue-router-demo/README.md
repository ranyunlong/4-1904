# vue-router-demo

## 安装

```shell    
npm i vue-router
```

vue-router是vue的一个插件

## hash 
hash 是利用 hash值不会造成 浏览器重新请求页面这个原理来跳转页面 js通过监听 window.location 里的hash 发生改变 重新加载不同的页面组件


## history
通过拦截history的跳转来重新生成页面 history对象里的成员发生改变的时候 加载不同的组件

Vue自动检测浏览器是否支持history 如果不支持 他会自动切换到hash  一定不能使用a标签来跳转页面 使用vue-router注册的全局组件 router-link
