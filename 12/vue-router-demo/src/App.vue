<template>
  <div id="app">
    <!-- 
      router-view是vue-router这个插件全局注册的一个组建
      这个组建用来跟据匹配的路径显示对应的路由

      router-link 也是vue-router这个插件里注册的全局组件
      它用于代替a标签 a标签不能兼容hash模式
     -->
     <!-- <a href="/">首页</a> -->
     <!-- <a href="/about">关于</a> -->
     <!-- <a href="/login">登陆</a> -->
     <!-- <router-link to="/">首页</router-link>
     <router-link to="/about.html">关于</router-link>
     <router-link to="/login.html">登陆</router-link> -->
      <keep-alive>
        111
        <router-view />
        <router-view name="a" />
        <router-view name="b" />
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
html,body,#app {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
