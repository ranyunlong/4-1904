// const obj = {
//     name: '张三',
//     run() {
//         const xx = () => {

//         }
//     }
// }

// obj.run()


// function test1() {
//     // console.log(arguments.length)
// }

// const test2 = (...args) => {
//     // 箭头函数的 arguments 也是用的副作用域里的
//     console.log(args.length)
// }

// test1(1, 2, 3, 4)

// test2(1, 2, 3, 4)


function name(age) {

}

// 函数只有一个参数时 不用加括号
const name = age => {

}

// 函数没有参数的时候
const name = () => {

}

//  如果有多个参数的时候
const name = (a, b, c) => {

}

const name = (...args) => {

}

function test() {
    var a= 1;
    var b = 2;

    return a + b
}

const test = () => '111';

const test = () => {
    var a= 1;
    var b = 2;

    return a + b
}


const run = (item) => item.a;

run({a: 2}) // 2;



// 返回一个数组
const change = (obj) => ({
    name: obj.name,
    age: 20
})


// 返回一个对象
const change = (obj) => ([
    obj.name,
    1,
    2,
    3
])

change({
    name: '张三',
    age:  10
})