// alert('test.js')

// var a = 100;

// function run() { 
//     alert('run')
//  }

// module.exports = {
//     a,
//     run
// }


// 按需导出
// 使用按需导出的成员
// 需要使用imort { aa, bb } from 'xx'
export function aa() {
    console.log('aa')
}

export function bb() {
    console.log('bb')
}

export const aaa = 100;

// exports.aa = function() {

// }

// exports.bb = function () { 

//  }

// 把别的模块合并导出
// 相当于 使用test.js的时候也能使用到 cc.js里的cc方法
// export {
//     cc
// } from './cc'



// 把cc里的所有成员合并导出
export { dd as fromCcJsDd } from './cc'

export function dd() {
    return '11dd11'
}

// es6的默认导出的 需要使用 import xx from '..' 来导入
export default {
    aa1: () =>{}
}

// node模块
// module.exports = () => {

// }
