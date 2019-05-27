import Vue from 'vue'
import App from './App.vue'

import iview from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iview)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
