<template>
    <div class="page">
        <div class="sider">
            <div>
                <router-link to="/admin/users.html">用户管理</router-link>
            </div>
            <div>
                <router-link to="/admin/setting.html">个人设置</router-link>
            </div>
        </div>
        <div class="content">
            <!-- 切换子路由 
                
            -->
            <router-view />
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .page {
        width: 100%;
        height: 100%;
        display: flex;
        .sider {
            width: 200px;
            height: inherit;
            background: orangered;
        }
        .content {
            background: #f7f7f7;
            flex: 1;
            height: inherit;
        }
    }
</style>