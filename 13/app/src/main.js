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



// 1.对象解构赋值

// const obj = { 
//     name: 'zhangsan',
//     age: 20,
//     sex: '人妖'
// }


// const { name, age, sex = '男' } = obj;

// console.log(name, age, sex)

// 使用 ... 取剩余成员
// 取剩余成员必须在前面取出正常对象成员之后 在取剩余参数

// const { age, name, ...more } = obj;

// console.log(age, name, more)

// const arr = [1, 2, 3, '老王', 200];

// 数组成员 按顺序解构
// 也可以设置默认值
// let [ name, b, c, d, e = 100 ] = arr;

// let name = arr[0]
// let b = arr[1]
// let c = arr[2]
// let d = arr[3]

// console.log(e)


// 使用 ... 取剩余成员

// let [a, b, ...more ] = arr;

// console.log(a, b, more)

// const obj1 = {
//     name: 'xx',
//     email: '1@qq.com'
// }

// const obj2= {
//     sex: 0,
//     email: '2@qq.com'
// }


// const merge = {
//     ...obj1,
//     ...obj2
// }


// const merge = {}
// merge.name = obj1.name
// merge.email = obj1.email

// merge.sex = obj2.sex
// merge.email = obj2.email


// console.log(merge)

// var arr1 = ['a', 'b']
// var arr2 = ['c', 'c']

// var arr3 = [...arr1, ...arr2]

// console.log(arr3)


// 2.promise

// 用于处理异步

// class Primi {
//     resolve = null
//     reject = null
//     constructor(callback) {
//         setTimeout(() => {
//             if (this.resolve || this.reject) {
//                 callback(this.resolve, this.reject)
//             }
//         }, 0)
//     }
//     then(callback) {
//         this.resolve = callback;
//         return this;
//     }

//     catch(callback) {
//         this.reject = callback
//         return this;
//     }
// }

// new Primi((resolve, reject) => {
//     resolve(100)
//     reject(100)

// }).then((r) => {
//     console.log('then', r)
// }).catch((e) => {
//     console.log('catch', e)
// })


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(100)
//     }, 1000)
// })

// function login() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({success: true})
//         }, 1000)
//     })
// }

// function getUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({name: 'zhangsan'})
//         }, 1200)
//     })
// }

// 使用 async的函数就会变成一个异步函数
// 使用async 的函数内部 可以给一个promise 加上await 等待promise完成之后再继续运行后面的
// await 必须写在async 的函数里 await后跟必须说一个promise 对象
// async function test() {
//     console.log(1)
//     const data = await login()
//     console.log(data)
//     // login().then(res => {
//     //     console.log(res)
//     // })
//     console.log(2)
//     const user = await getUser()
//     console.log(user)
//     // getUser().then((res) => {
//     //     console.log(res)
//     // })
//     console.log(3)
// }


// console.log('异步之前')

// test()
// console.log('异步之后')

// 把多个promise 一起执行 按顺序
// Promise.all([login(), getUser()]).then(res => {
//     console.log(res)
// })


// 多个promise 一起赛跑 谁快就得到谁的结果 慢的会被忽略掉
// Promise.race([login(), getUser()]).then(res => {
//     console.log(res)
// })


// login().then(res => {
//     // console.log(res)
//     if (res.success) {
//         getUser().then(res => {
//             console.log(res)
//         })
//     }
// })


// 3.async await

// 4.proxy

// 6. map

// const m = new Map()

// m.set('a', 100)
// m.set('b', 200)

// console.log(m.get('b'))

// console.log(m.has('b'))

// m.forEach((item, key) => {
//     console.log(item, key)
// })

// 清空map
// m.clear()

// console.log(m)

// m.delete('a')

// console.log(m)


// 7. set

// 跟数组类似 不能有重复的成员
// const s = new Set()

// s.add('11')

// s.add('22')

// s.clear()

// console.log(s.has('11'))

// 8. arrow function

// 9. class

// es5 类
// function Student(name, age) {
//     this.name = name
//     this.age = age
//     this.sex = 100
// }

// Student.prototype.run = function() {

// }

// es6 类 class
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }

// // 一个类只能有一个构造函数
// // 如果有多个构造函数就会覆盖掉之前的构造函数
// class Student extends Person {
//     constructor(name, age, className) {
//         // 用super 来给父类（基类）传递参数 调用父类Person 的构造函数 constructor
//         // 子类如果有构造函数 必须首先调用super
//         super(name, age)
//         this.className = className
//     }

//     run() {

//     }
// }

