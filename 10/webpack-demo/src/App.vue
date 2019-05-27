<template>
<h1>222</h1>
</template>

<script>
// 单个文件的vue组件里面 vue文件里
// 如果有template区域上面的区域
// 局部组件里的template 选项将不起任何作用

export default {
    name: 'app',
    template: `<h2>1111</h2>`,
    // render: ``
    // render 比template更优先
    // render: 
    data() {
        return {}
    }
}
</script>

<style>

</style>
