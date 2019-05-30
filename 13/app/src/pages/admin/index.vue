<template>
    <!-- <div>
        Admin
        <router-view />
    </div> -->
    <Layout class="admin-layout">
        <Header class="header"></Header>
        <Layout>
            <Sider class="sider">
                <Menu
                    width="auto"
                    theme="dark"
                >
                   <div 
                        v-for="item in menuList"
                        :key="item.menuId"
                    >
                        <Submenu :name="item.name" v-if="item.type === 0">
                            <template slot="title">
                                {{item.name}}
                            </template>
                            <MenuItem v-for="child in item.children" :name="child.name" :key="child.menuId">
                                <div @click="goto(child)">
                                    {{child.name}}
                                </div>
                            </MenuItem>
                        </Submenu>

                        <MenuItem v-else>
                            {{item.name}}
                        </MenuItem>
                   </div>
               </Menu>
            </Sider>
            <Content class="content">
                <router-view />
            </Content>
        </Layout>
    </Layout>
</template>

<script>
    import { getMenuList } from '../../api/getMenuList'
    import { deepMenu } from '../../utils/deepMenu'
    export default {
        data() {
            return {
                menu: []
            }
        },
        beforeCreate() {
            getMenuList().then(res => {
                // 请求到的菜单放入组件变量成员中
                this.menu = res.data
            })
        },
        computed: {
            menuList() {
                return deepMenu(this.menu, 0)
            }
        },
        methods: {
            goto(item) {
                // console.log(item)
                this.$router.push({
                    path: `/${item.url}.html`
                })
            }
        }
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