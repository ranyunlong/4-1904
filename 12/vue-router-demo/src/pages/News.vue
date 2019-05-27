<template>
    <ul>
        <li 
            v-for="item in news"
            :key="item.id"
            @click="goDetail(item, item.url)"
        >
            {{item.title}}
            <!-- <router-link :to="item.url">{{item.title}}</router-link> -->
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                news: [
                    {
                        id: 1,
                        title: '新闻1',
                        url: '/news/2019/1.html'
                    },
                    {
                        id: 2,
                        title: '新闻2',
                        url: '/news/2019/2.html'
                    },
                    {
                        id: 3,
                        title: '新闻3',
                        url: '/news/2019/3.html'
                    }
                ]
            }
        },
        methods: {
            goDetail(item, url) {
                // ['/news.html', '/news/20190210/1.html']
                // 添加一个新的历史纪录 
                // this.$router.push(url)

                // 把当前页面的历史记录替换掉 不能返回
                // this.$router.replace(url)

                // 返回
                // this.$router.back()

                // 前进
                // this.$router.go()
                // push 和 replace 都可以使用参数来跳转
                // 通过路由名称来生成一个路径去做跳转
                // 没有拼接路径字符串时使用name来跳转 使用params来组合成路径
                // this.$router.push({
                //     name: 'NewsDetail',
                //     params: {
                //         date: 2019,
                //         id: item.id
                //     },
                //     query: {
                //         a: 1,
                //         b: 2
                //     }
                // })
                

                // 路径已经被拼接好了 直接用path去做跳转
                this.$router.push({
                    path: url,
                    query: {}
                })
            }
        }
    }
</script>

<style>

</style>