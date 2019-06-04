<template>
    <div>
        {{myCount}}
        <input @input="handleInput" />
        <button @click="addCount">加</button>
        <button @click="reduceCount">减</button>
        <button @click="changeMenu([1, 2,5 ,3, 4, 6])">修改菜单</button>
        {{menuList}}
    </div>
</template>

<script>
    import {
            mapState,
            mapMutations,
            mapGetters,
            mapActions,
            createNamespacedHelpers
        } from 'vuex';
    // mapState 遍历state的数据到组件中
    // mapMutations  遍历mutations的方法到组件中
    // mapGetters  遍历getters的方法到组件中
    // mapActions 遍历actions的方法到组件中
    // createNamespacedHelpers 创建命名空间助手函数

    const menu = createNamespacedHelpers('menu')

    export default {
        created() {
            console.log(this.$store)
        },
        methods: {
            // mapMutations 只能放到方法里
            ...mapMutations([
                'addCount',
                'reduceCount'
            ]),
            ...menu.mapMutations([
                'changeMenu'
            ]),
            // mapActions 也是只能放到方法里
            ...mapActions([
                'CHANGE_COUNT'
            ]),

            // addCount() {
            //     this.$store.commit('addCount')
            //     // this.$store.dispatch('CHANGE_COUNT', 10)
            // },
            // reduceCount() {
            //     this.$store.commit('reduceCount')
            // },
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
        computed: {
            // 助手函数getters 帮助生成getters
            // mapGetters 只能放到computed里
            ...mapGetters([
                'myCount',
                'sysMenus',
                'userInfo',
            ]),
            ...menu.mapGetters([
                'menuList'
            ])
            // myCount() {
            //     return this.$store.getters.myCount
            // },
            // userInfo() {
            //      return this.$store.getters.userInfo
            // },
        }
    }
</script>

<style lang="less" scoped>

</style>