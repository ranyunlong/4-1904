import App from './App.vue'
// 这里vue默认的版本是生产版本 不适合做开发时用
// template 组件或实例的template选项被禁用了
// vue/dist/vue.esm 这个js文件是开发时的版本
import Vue from 'vue/dist/vue.esm';

const Test = {
    props: {
        title: String,
        show: Boolean
    },
    template: `
    <div>{{title}} {{show}}</div>
    `
}


new Vue({
    el: '#app',
    // render选项 是一个函数 是用来渲染组件
    // createElement这个参数是一个函数 
    // vue会createElement这个函数传递到render的第一个参数里
    // 当有了render选项之后
    // template选项就不会生效了
    // render(createElement) {
    //     // createElement 用来创建标签的
    //    return createElement('div', 'div')
    // },
    render: (h) => h(Test, {
        // 当生成Test组件时 给Test组件传递prop
        props: {
            title: '1122'
        },
        // 原生元素的属性方法
        domProps: {
            // innerHTML: 'baz'
        },
        // @click.native 相当于是这个修饰符
        nativeOn: {
            click() {
                // @click.native
            }
        },
        // 给这个组件添加自定义指令
        directives: {

        },
        // 给这个组件添加作用域插槽
        scopedSlots: {

        },
        // 给这个组件添加插槽
        // 相当于把当前组件插入到其他组件里 <Test slot="xxx">
        slot: 'xxx',
        //  相当于 <Test ref="xxx">
        ref: "xxx"

    }),
    
    // (h) => h('div', {
    //     // on选项可以给生成的div 添加事件
    //     // 相当于v-on:
    //     on: {
    //         //相当于@click
    //         click() {
    //             console.log(1)
    //         }
    //     },
    //     // 相当于 v-bind:class
    //     class: {
    //         active: true
    //     },
    //     // 相当于v-bind:style
    //     style: {
    //         background: 'red'
    //     },
    //     // 相当于给生成的这个标签添加元素的属性
    //     attrs: {
    //         index: 1
    //     },
    //     // 渲染组件时给组件传递参数的
    //     props: {

    //     }
    // }, 'div里的内容')
})


// 渲染组件 直接给createElement 函数传递一个组件
// createElement我们一般简写为h
// h(某某组件) h(App)

//  直接生成一个标签
// h(tagName) 标签名称 也可以是全局的字符串组件名称 也可以是直接的组件变量名称
// h('div')

/**
 * h(tagName, slot)
 * 1. tagName 标签名称 也可以是全局的字符串组件名称 也可以是直接的组件变量名称
 * 2. slot 标签嵌套的内容
 * 
 * h('div', '内容') => <div>内容</div>
 */

 /**
  * h(tagName, options, slot)
  * 1. tagName 标签名称 也可以是全局的字符串组件名称 也可以是直接的组件变量名称
  * 2. options 选项 给组件传参 或给当前标签设置html属性
  * 或者绑定事件
  * 3. slot 标签嵌套的内容
  */