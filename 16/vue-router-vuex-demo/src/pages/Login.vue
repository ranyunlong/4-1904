<template>
    <div>
        
        <h1>登录</h1>
        <Form :style="{width: '500px', margin: '0 auto'}">
            <FormItem>
                <Input v-model="form.username" />
            </FormItem>
            <FormItem>
                <Input v-model="form.password"  />
            </FormItem>
            <FormItem>
                <Input v-model="form.captcha"  />
                <img :src="url" />
            </FormItem>

            <FormItem>
                <Button @click="login" long type="primary">登录</Button>
                {{token}}
            </FormItem>
        </Form>
        
    </div>
</template>

<script>
    import uuid from 'uuid';
    import { createNamespacedHelpers } from 'vuex';
import { Promise } from 'q';
    const sys = createNamespacedHelpers('sys');
    export default {
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                    captcha: '',
                    uuid: uuid()
                }
            }
        },
        computed: {
            ...sys.mapGetters([
                'token'
            ]),
            url() {
                return `/api/captcha.jpg?uuid=${this.form.uuid}`
            }
        },
        methods: {
            login() {
                // 表单验证
                this.SYS_LOGIN(this.form).then(res =>{
                     
                })
            },
            ...sys.mapActions([
                'SYS_LOGIN'
            ])
        }
    }
</script>

<style lang="less" scoped>

</style>