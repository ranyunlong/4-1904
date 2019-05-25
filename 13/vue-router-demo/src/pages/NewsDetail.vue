<template>
    <div>
        <ul>
            <li>
                <router-link to="/news/2018/1.html">新闻推荐1</router-link>
               
            </li>
            <li>
                 <router-link to="/news/2018/2.html">新闻推荐2</router-link>
                
            </li>
            <li>
                <router-link to="/news/2018/3.html">新闻推荐3</router-link>
            </li>
        </ul>
        <h1>新闻详情</h1>
        {{$route.params}}
    </div>
</template>

<script>
    export default {
        created() {
           /**
            * 在vue每一个页面组件里 可以获取到两个关于路由的对象
            * 1. $router
            * 包含路由跳转等方法的 对象
            * 2. $route
            * 包含路由信息的对象
            */
            //    console.log(this.$route.params)
            //    console.log(this.$router)
            //  console.log('created')
            // 在同一个组件里 跳转到同一个组件 虽然路由参数不一样 但是组件不会被销毁重新创建

            // 第一次ajax 在create 钩子里
        },
        watch: {
            $route(v) {
                // 后面的更新在watch里处理
                // console.log(v)
            }
        }
    }
</script>