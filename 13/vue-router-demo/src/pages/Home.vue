<template>
    <div class="page">
        <h1>Home Page</h1>
        <input v-model="value" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: ""
            }
        },
        destroyed() {
            console.log('home 销毁')
        }
    }
</script>

<style>

</style>