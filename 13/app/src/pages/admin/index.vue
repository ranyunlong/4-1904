<template>
    <!-- <div>
        Admin
        <router-view />
    </div> -->
    <Layout class="admin-layout">
        <Header class="header"></Header>
        <Layout>
            <Sider class="sider"></Sider>
            <Content class="content">
                <router-view />
            </Content>
        </Layout>
    </Layout>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.admin-layout {
    height: 100%;
    overflow: hidden;
    .header{
        background: #fff;
    }

    .content {
        height: 100%;
        overflow: auto;
        display: flex;
        background: #ccc;
    }
}
</style>