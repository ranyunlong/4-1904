import Vue from 'vue/dist/vue.esm'
import App from './App.vue'
import Icon from './components/Icon.vue'
import Button from './components/Button.vue'

import myPlugin from './my-plugin'


Vue.use(myPlugin, {
  local: 'zh',
  theme: 'dark'
})
// Vue.usePlugin = function(plugin, options) {
//   if (typeof plugin === 'object' && typeof plugin.install === 'function') {
//     plugin.install(Vue, options)
//   }
// }

// Vue.usePlugin(myPlugin)

// 把局部组件变成全局组件
Vue.component('Icon', Icon)
Vue.component('Button', Button)

Vue.config.productionTip = false


// 全局组件必须要注册到实例之前
new Vue({
  render: h => h(App),
}).$mount('#app')
