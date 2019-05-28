import { http } from "./http";

/**
 * 登录接口
 * 
 * 要传递的参数有哪些
 * data 
 * 
 * "username": "string",
 * "password": "string",
 *  "captcha": "string",
 *  "uuid": "string"
 */

export function login(data) {
    // 处理更多的事情
    return http.post('/sys/login', data)
}

// const jq = {}

// jq.post('/login', () => {
//     jq.get('/list', () => {

//     })
// })

// const jq = new Promise((resolve, reject) => {

//     const xhr = new XMLHttpRequest()
//     xhr.send('/login')
//     xhr.addEventListener('readystatechange', () => {
//         resolve(res)
//         reject(xx)
//     })
//     // setTimeout(() => {
//     //     resolve(100)
//     //     // reject(new Error('失败'))
//     // }, 1000)
// })

// jq
// // 处理成功时调用then里的匿名函数
// .then(function(res) {
//     console.log(res)
// })
// // 处理失败时调用catch
// .catch(function (err) {
//     console.log(err)
//  })

// function test(callback) {
//     let resolve = null;
//     let reject = null;
//     setTimeout(() => {
//         callback(resolve, reject)
//     }, 0);
//     return {
//         then(fn) {
//             // console.log('添加then函数')
//             resolve = fn;
//             return this;
//         },
//         catch(fn) {
//             // console.log('添加catch函数')
//             reject = fn;
//             return this;
//         }
//     }
// }

// test((resolve, reject) => {
//     console.log(resolve, reject)
// }).then(() => {
//     console.log('then')
// }).catch(() => {
//     console.log('catch')
// })