import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminPage from '../pages/admin/index.vue';
import LoginPage from '../pages/Login.vue';

import AdminWelcomePage from '../pages/admin/Welcome.vue';
import AdminUsersPage from '../pages/admin/Users.vue';
import AdminRolesPage from '../pages/admin/Roles.vue';

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/admin'
        },
        {
            path: '/admin',
            component: AdminPage,
            meta: {
                auth_login: true
            },
            children: [
                {
                    path: '/',
                    alias: 'index.html',
                    meta: {
                        auth_login: true
                    },
                    component: AdminWelcomePage
                },
                {
                    path: 'users.html',
                    meta: {
                        auth_login: true
                    },
                    component: AdminUsersPage
                },
                {
                    path: 'roles.html',
                    meta: {
                        auth_login: true
                    },
                    component: AdminRolesPage
                }
            ]
        },
        {
            path: '/login.html',
            component: LoginPage
        }
    ]
})


// 前置守卫、路由拦截器
// 在进入新的路由前被拦截
router.beforeEach((to, from, next) => {
    /**
     * 1. to 到哪里去
     * 2. from 从哪里来
     * 3. next 是否允许通行
     */

    // console.log(to)

    // console.log(to, from, next)
    // console.log(to)
    // console.log(from)

    // 需要验证登录的页面
    if (to.meta.auth_login) {
        if (localStorage.getItem('token')) {
            next()
        } else {
            next({path: '/login.html'})
        }
    } else {
        next()
    }

    
})

export default router