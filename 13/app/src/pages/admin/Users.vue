<template>
    <Layout class="users-layout ">
        用户管理
    </Layout>
</template>

<script>
    import { getUserList } from '../../api/getUserList'
    export default {
        beforeCreate() {
            getUserList({
                page: 1,
                limit: 10,
                sidx: 'userId',
                order: 'desc',
                // username: ''
            }).then(res => {
                console.log(res)
            })
        }
    }
</script>

<style lang="less" scoped>
.users-layout {
    background: #fff;
    flex: 1;
    margin: 15px;
}
</style>