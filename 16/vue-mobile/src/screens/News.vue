<template>
    <Screen>
        <Header>
            <button @click="$router.back()">back</button>
            新闻页面
        </Header>
    </Screen>
</template>

<script>
    import Screen from '../components/Screen.vue'
    import Header from '../components/Header.vue'
    export default {
        components: {
            Screen,
            Header
        }
    }
</script>

<style lang="less" scoped>

</style>