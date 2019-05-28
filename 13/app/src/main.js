import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iview from 'iview';

// 导入样式
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false

Vue.use(iview);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
