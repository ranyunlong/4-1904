<template>
    <div class="page">
        <h1>Login Page</h1>
        <input v-model="value" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: ''
            }
        },
        // 一个使用keep-alive的组件 
        // 当缓存组件被激活时触发
        activated() {
            // console.log('缓存组件触发了')
        },
        deactivated() {
            // console.log('从缓存的组件离开时触发')
        },
        destroyed() {
            // console.log('login 销毁')
        }
    }
</script>

<style>

</style>