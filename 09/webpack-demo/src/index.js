// const test = require('./test')
// require('./css/styles.less');
// test.run()

// console.log(test.a)

// style = 'body{background: red}'

// document.head.append(
//     document.createElement('style').innerHTML = style
// )

// less scss sass


// es6的模块语法

// 导入模块
// const test = require('./test')

// es6导入模块
// import test, { aa, bb, aaa } from './test';

// 如果一个模块里有按需导出的 也有默认导出的 我都想用到
// 把所有成员全都取出来存在aliasname名称上
// 默认导出的会被存在default成员上
// import * as aliasname from './test'
// import { dd as tDd } from './test'

// function dd() {
//     console.log(tDd())
// }

// dd()


// 使用 xx.js模块里默认导出的成员
import xx from 'xx'
// 使用 xx.js模块里按需导出的成员
import { run } from 'xx'

// 使用默认和按需的都使用
import xx, { run } from 'xx'

// 把默认的和按需的都放在一个集合里
import * as xxx from 'xx';


// 直接导出一个函数
export function test() {

}

// 直接导出一个变量
export const a = 100;


// 默认导出一个函数
// 可以是匿名变量或者函数
export default function() {

}

// 默认导出一个对象
export default {

}

// 默认导出一个数组
export default []

// 按需代理导出
// 把cc.js 里的run 成员和当前模块按需的导出成员一起按需导出
export { run } from 'cc'

//把cc.js 里的 所有的成员和当前模块按需的导出成员一起按需导出
export * from 'cc'