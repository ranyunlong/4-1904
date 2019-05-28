<template>
    <div class="page">
        <Form 
            class="login-box"
            :model="form"
            :rules="rules"
            ref="form"
        >
            <FormItem>
               <h2>登陆</h2>
            </FormItem>

            <!-- prop 定位错误 -->
            <FormItem
                prop="username"
            >
                <Input
                    prefix="md-person"
                    v-model="form.username"
                    placeholder="用户名"
                />
            </FormItem>

            <FormItem
                 prop="password"
            >
                <Input
                    type="password"
                    v-model="form.password"
                    prefix="md-lock"
                    placeholder="密码"
                />
            </FormItem>

            <FormItem
                 prop="captcha"
            >
                <div class="captcha">
                    <Input
                        v-model="form.captcha"
                        class="captcha-input"
                        prefix="md-image"
                        placeholder="验证码"
                    />
                    <img @click="createUid()" class="img" :src="captchaUrl" alt="验证码">
                </div>
            </FormItem>

            <FormItem>
                <Button type="primary" @click="login" long>登陆</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import uuid from 'uuid'
    import { login } from '../api/login'
    import { http } from '../api/http'
    export default {
        data() {
            return {
                uid: uuid(),
                // 表单数据
                form: {
                    username: "",
                    password: "",
                    captcha: "",
                },
                // 验证规则
                rules: {
                    username: [
                        { required: true, message: "用户名必须" },
                        { min: 5, max: 18, message: "用户名必须6-18位" },
                    ],
                    password: [
                        { required: true, message: "密码必须" },
                        { min: 5, max: 18, message: "用户名必须6-18位" },
                    ],
                    captcha: [
                        { required: true, message: "验证码必须" },
                        { min: 5, max: 5, message: "验证码必须5位" },
                    ]
                }
            }
        },
        methods: {
            createUid() {
                this.uid = uuid();
            },
            login() {
                // 获取表单的对象
                this.$refs['form'].validate(valid => {
                    // console.log(valid)
                    // 如果valid 为true 表示验证通过
                    // ajax。。。
                    // login({
                    //     ...this.form,
                    //     uuid: this.uid
                    // }).then(res => {
                    //     const { code, msg, token } = res.data
                    //     if (code === 0) {
                    //         localStorage.setItem('token', token)
                    //         this.$router.push({
                    //             path: '/admin/'
                    //         })
                    //     } else {
                    //         this.$Notice.error({
                    //             title: '提示',
                    //             desc: msg
                    //         })
                    //     }
                    // })

                    http.post('/sys/login', {...this.form, uuid: this.uid}).then(res=> {

                    })
                })
            }
        },
        computed: {
            captchaUrl() {
                return '/api/captcha.jpg?uuid=' + this.uid;
            } 
        }
    }
</script>

<style lang="less" scoped>
.page {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f8f8;
    .login-box {
        width: 350px;
        height: auto;
        background-color: #fff;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
        .captcha {
            display: flex;
            justify-content: space-between;
        }
        .captcha-input {
            width: 120px;
        }
        .img {
            height: 32px;
        }
    }
}
</style>