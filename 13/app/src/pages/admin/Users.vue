<template>
    <Layout class="users-layout ">
        <div class="header">
            <Input
                placeholder="请输入管理名称"
                class="search"
                search
                @on-search="handleSearch"
            />
            <Button type="primary" @click="modalTitle='添加管理员', showModal=true">添加管理员</Button>
        </div>
        <Table @on-selection-change="handleSelectionChange" :loading="loading" :columns="columns" :data="data" />
        <div class="pager">
            <Button type="error" :disabled="selections.length === 0" @click="handleDeleteUsers">批量删除</Button>

            <Page
                :current.sync="currPage"
                :total="totalCount"
                show-sizer
                :page-size="pageSize"
                @on-page-size-change="handlePageSizeChange"
                :page-size-opts="[5, 10, 15]"
            />
        </div>
        <Modal
            v-model="showModal"
            :title="modalTitle"
            @on-ok="handleSubmit"
            @on-cancel="handleCancel"
            :loading="modalLoading"
        >
            <Form
                :model="form"
                :rules="rules"
                ref="form"
            >
                <FormItem
                    label="账号"
                    :label-width="60"
                    prop="username"
                >
                    <Input v-model="form.username" />
                </FormItem>
                <FormItem
                    label="密码"
                    :label-width="60"
                    prop="password"
                >
                    <Input type="password" v-model="form.password" />
                </FormItem>
                <FormItem
                    label="邮箱"
                    :label-width="60"
                    prop="email"
                >
                    <Input type="email" v-model="form.email" />
                </FormItem>

                <FormItem
                    label="手机"
                    :label-width="60"
                    prop="mobile"
                >
                    <Input v-model="form.mobile" />
                </FormItem>

                <FormItem
                    label="状态"
                    :label-width="60"
                    prop="status"
                >
                    <iSwitch
                        :true-value="0"
                        :false-value="1"
                        v-model="form.status"
                    />
                </FormItem>
            </Form>
            <template slot="footer" >
                <Button @click="handleCancel">取消</Button>
                <Button @click="handleSubmit" type="primary" :loading="modalLoading">确认</Button>
            </template>
        </Modal>
    </Layout>
</template>

<script>
    import { getUserList } from '../../api/getUserList'
    import UserTools from '../../components/UserTools.vue'
    import validator from 'validator';
    import { saveUser } from '../../api/saveUser';
    import { updateUser } from '../../api/updateUser';
    import { deleteUser } from '../../api/deleteUser';
    export default {
        data() {
            return {
                // 模态框表单
                form: {
                    userId: 0,
                    username: '',
                    password: '',
                    email: '',
                    mobile: '',
                    status: 0,
                    roleIdList: [],
                },

                // 莫泰框加载状态
                modalLoading: false,

                rules: {
                    username: [
                        {
                            required: true, message: '账号必须'
                        },
                        {
                            min: 5, max: 18, message: '账号必须5-18'
                        }
                    ],
                    password: [
                        {
                            min: 5, max: 18, message: '密码必须5-18'
                        }
                    ],
                    email: [
                        {
                             required: true, message: '邮箱必须'
                        },
                        {
                            validator: (rule, value, callback) => {
                                if (!validator.isEmail(value)) {
                                    callback(new Error('邮箱格式不正确'))
                                } else {
                                    callback()
                                }
                            },
                            message: '邮箱格式不正确'
                        }
                    ],
                    mobile: [
                        {
                             required: true, message: '手机必须'
                        },
                        {
                            validator: (rule, value, callback) => {
                                if (!validator.isMobilePhone(value, 'zh-CN')) {
                                    callback(new Error('手机格式不正确'))
                                } else {
                                    callback()
                                }
                            },
                            message: '手机格式不正确'
                        }
                    ]
                },

                selections: [],

                // 表格列
                columns: [
                    {
                        type: 'selection',
                        width: 50,
                        fixed: 'left'
                    },
                    {
                        title: '#',
                        key: 'userId',
                        align: 'center',
                        width: 100
                    },
                    {
                        title: '用户名',
                        key: 'username',
                        align: 'center'
                    },
                    {
                        title: '邮箱',
                        key: 'email',
                        align: 'center'
                    },
                    {
                        title: '手机',
                        key: 'mobile',
                        align: 'center'
                    },
                    {
                        title: '状态',
                        key: 'status',
                        align: 'center',
                        render: (h, parmas) => h('Tag', {
                            props: {
                                type: 'dot',
                                color: parmas.row.status === 0 ? 'success' : 'default',
                                size: 'small'
                            }
                        },  parmas.row.status === 0 ? '启用' : '禁用')
                    },
                    {
                        title: '创建人',
                        key: 'createUserId',
                        align: 'center'
                    },
                    {
                        title: '创建时间',
                        key: 'createTime',
                        align: 'center'
                    },
                    {
                        title: '操作',
                        align: 'center',
                        fixed: 'right',
                        width: 140,
                        // 根据render函数来生成表体行里操作列的数据
                        render: (h, params) => h(UserTools, {
                            on: {
                                edit: (e) => {
                                    this.modalTitle = '编辑管理员'
                                    this.showModal = true
                                    const { email, mobile, password, status, userId, username, roleIdList } = params.row
                                    this.form = {
                                        email,
                                        mobile,
                                        password: '',
                                        status,
                                        userId,
                                        username,
                                        roleIdList
                                    }
                                },
                                del: (e) => {
                                    const { userId, username } = params.row
                                    this.deleteLoading = userId
                                    this.$Modal.confirm({
                                        title: '警告',
                                        content: `您正在删除用户<b>${username}</b>,是否确认删除？`,
                                        loading: true,
                                        onOk: () => {
                                            deleteUser([userId]).then(res => {
                                                if (res.data.code === 0) {
                                                    this.$Notice.success({
                                                        title: '提示',
                                                        desc: '删除成功！'
                                                    })
                                                    // 刷新列表
                                                    this.getList()
                                                    // 移除模态框
                                                    this.$Modal.remove()
                                                } else {
                                                    this.$Notice.error({
                                                        title: '提示',
                                                        desc: '删除失败！'
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            }
                        })
                        // (h) => h('div', [
                        //     h('Button', 
                        //         { 
                        //             props: {
                        //                 type: 'success',
                        //                 size: 'small'
                        //             } 
                        //         }, 
                        //     '编辑')
                        // ])
                    }
                ],
                // 加载状态
                loading: false,
                // 表体数据
                data: [],
                // 当前页码
                currPage: 1,
                // 每页多少条
                pageSize: 10,
                // 总条数
                totalCount: 1,
                // 总页数
                totalPage: 1,
                // 搜索用户名
                username: '',
                // 是否显示模态框
                showModal: false,
                // 模态框标题
                modalTitle: '',
            }
        },
        watch: {
            username() {
                this.getList()
            },
            currPage() {
                this.getList()
            },
            pageSize() {
                this.getList()
            }
        },
        created() {
            this.getList()
        },
        methods: {
            /**
             * 提交数据
             */
            handleSubmit() {
                this.$refs.form.validate((valid) => {
                    this.modalLoading = true
                    if (valid) {
                        if (this.modalTitle === '添加管理员') {
                            saveUser(this.form).then(res => {
                                if (res.data.code === 0) {
                                    this.$Notice.success({
                                        title: '提示',
                                        desc: '用户添加成功'
                                    })
                                    this.getList()
                                } else {
                                    this.$Notice.error({
                                        title: '提示',
                                        desc: res.data.msg
                                    })
                                }
                                this.modalLoading = false
                                this.showModal = false
                            })
                        } else if (this.modalTitle === '编辑管理员') {
                            updateUser(this.form).then(res => {
                                if (res.data.code === 0) {
                                    this.$Notice.success({
                                        title: '提示',
                                        desc: '用户修改成功'
                                    })
                                    this.getList()
                                } else {
                                    this.$Notice.error({
                                        title: '提示',
                                        desc: res.data.msg
                                    })
                                }
                                this.modalLoading = false
                                this.showModal = false
                            })
                        }  
                    } else {
                        this.$nextTick(() => {
                            this.modalLoading = false
                            this.showModal = true
                        })
                    }
                })
               
            },
            /**
             * 关闭表单
             */
            handleCancel() {
                // 重置表单
                this.$refs.form.resetFields()
                this.showModal = false
            },
            /**
             * 处理页码改变
             */
            handlePageSizeChange(pageSize) {
                this.pageSize = pageSize
            },
            /**
             * 获取用户列表的
             */
            getList() {
                const { currPage, pageSize, username } = this;
                this.loading = true
                getUserList({
                    page: currPage,
                    limit: pageSize,
                    sidx: 'userId',
                    order: 'desc',
                    username: username,
                }).then(res => {
                    const { msg, code, page } = res.data
                    this.loading = false
                    if (code === 0) {
                        const { currPage, list, pageSize, totalCount, totalPage } = page
                        this.currPage = currPage;
                        this.data = list;
                        this.pageSize = pageSize;
                        this.totalCount = totalCount;
                        this.totalPage = totalPage;
                    } else {
                        
                    }
                })
            },

            /**
             * 处理搜索
             */
            handleSearch(username) {
                // console.log(e)
                this.username = username
            },

            /**
             * 处理表格多选
             */
            handleSelectionChange(selection) {
                this.selections = selection.map(item => item.userId)
            },
            handleDeleteUsers() {
                if (this.selections.length > 0) {
                    this.$Modal.warning({
                        title: '警告',
                        content: `您将要删除${this.selections.length}位管理员，确认删除吗?`,
                        loading: true,
                        onOk: () => {
                            deleteUser(this.selections).then(res => {
                                if (res.data.code === 0) {
                                    this.$Notice.success({
                                        title: '提示',
                                        desc: '删除成功！'
                                    })
                                    // 刷新列表
                                    this.getList()
                                    // 移除模态框
                                    this.$Modal.remove()
                                    this.selections = []
                                } else {
                                    this.$Notice.error({
                                        title: '提示',
                                        desc: '删除失败！'
                                    })
                                }
                            })
                        }
                    })
                } else {
                    this.$Modal.warning({
                        title: '警告',
                        content: `未选择用户！`
                    })
                }
            }
        }
    }
</script>

<style lang="less" scoped>
.users-layout {
    background: #fff;
    flex: 1;
    margin: 15px;
    padding: 15px;
    width: 100%;
    overflow: hidden;
    .header {
        display: flex;
        margin-bottom: 15px;
        .search {
            width: 200px;
            margin-right: 15px;
        }
    }
    .pager {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
    }
}
</style>