import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login.html'
        },
        {
            path: '/login.html',
            component: () => import('../pages/Login.vue')
        },
        {
            path: '/sys',
            component: () => import('../pages/sys/index.vue')
        }
    ]
})