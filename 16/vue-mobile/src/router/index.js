import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('../screens/Home.vue')
        },
        {
            path: '/news',
            component: () => import('../screens/News.vue')
        }
    ]
})