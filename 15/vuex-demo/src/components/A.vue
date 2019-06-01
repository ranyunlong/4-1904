<template>
    <div>
        <input @input="handleInput" />
        <button @click="add">加</button>
        <button @click="reduce">减</button>
    </div>
</template>

<script>
    export default {
        methods: {
            add() {
                // this.$store.commit('addCount')
                this.$store.dispatch('CHANGE_COUNT', 10)
            },
            reduce() {
                // this.$store.commit('reduceCount')
            },
            handleInput(e) {
                // console.log(e.target.value)
                // this.$store.getters.myCount = e.target.value
                // console.log()     
                // commit('mutation名称', 自定义参数 可选)
                // 用于触发mutation
                // this.$store.commit

                // dispatch('action 名称', 自定义参数 可选)
                // 用于触发action
                // this.$store.dispatch

                this.$store.commit('changeCount', e.target.value)

            }
        },   
    }
</script>

<style lang="less" scoped>

</style>