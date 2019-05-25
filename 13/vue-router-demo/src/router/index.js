import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import About from '../pages/About.vue'
import Notfound from '../pages/Notfound.vue'
import News from '../pages/News.vue'
import NewsDetail from '../pages/NewsDetail.vue'
import Admin from '../pages/Admin/index.vue'
import AdminUsers from '../pages/Admin/Users.vue'
import AdminSetting from '../pages/Admin/Setting.vue'
import Test from '../pages/Test.vue'


Vue.use(VueRouter);

export default new VueRouter({
    // 路由模式
    mode: 'history',
    // 路由配置
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login.html',
            component: Login
        },
        {
            path: '/about.html',
            component: About
        },
        {
            path: '/news.html',
            component: News
        },
        {
            path: '/news/:date/:id.html',
            meta: {
                a:100
            },
            name: 'NewsDetail',
            component: NewsDetail
        },
        {
            path: '/admin',
            component: Admin,
            // Admin 组件里有children 在Admin组件里必须要有这些children的路由切换容器router-view
            children: [
                {
                    path: '/admin/users.html',
                    component: AdminUsers
                },
                {
                    path: '/admin/setting.html',
                    component: AdminSetting
                },
            ]
        },
        {
            path: '/test',
            component: Test,
            children: [
                {
                    // 子路由默认可以不用加路径符号/ 如果要加 必须把父路由组合上
                    path: '/',
                    alias: 'index.html',
                    components: {
                        default: {
                            render: h => h('div', 'default')
                        },
                        a: {
                            render: h => h('div', 'a')
                        },
                        b: {
                            render: h => h('div', 'b')
                        }
                    }
                }
            ]
        },
        {
            path: '/404.html',
            component: Notfound 
        },
        {
            // 匹配任意路径
            path: '*',
            // component: Notfound
            // 重定向
            redirect: '/404.html'
        }
    ]
})