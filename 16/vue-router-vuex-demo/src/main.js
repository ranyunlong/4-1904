import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import iview from 'iview';
import 'iview/dist/styles/iview.css'

router.beforeResolve((to, from, next) => {
    // console.log(store.getters['sys/token'])
    next()
})

Vue.use(iview);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')