import Test from './components/Test.vue'
import Input from './components/Input.vue'

const components = {
    Test,
    Input
}
export default {
    install(Vue, options) {
        const mixin = {
            data() {
                return {
                    theme: options.theme || 'primary',
                    local: options.local || 'zh'
                }
            }
        }

        // 把所有组件遍历
        Object.keys(components).forEach((key) => {
            // 给每个组件混入主题
            components[key].mixins = [mixin]
            // 循环注册组件
            Vue.component(key, components[key])
        })

        // Test.mixins = [mixin]
        // Input.mixins = [mixin]


        // Vue.component('Test', Test)
        // Vue.component('Input', Input)
        Vue.directive('focus', {
            bind(el) {
                console.log(el)
            },
            inserted() {

            }
        })

        Vue.filter('upper', (value) => { 
           return value.toUpperCase()
        })
    }
}