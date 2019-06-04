import { login } from '../../../api/login'

export default {
    namespaced: true,
    state: {
        // vuex启动时给他设置初始化数据
        token: localStorage.getItem('token') || null,
        userInfo: {},
    },
    getters: {
        token(state) {
            return state.token
        },
        userInfo(state) {
            return state.userInfo
        }
    },
    mutations: {
        // 只要是修改token 必须经过他
        updateToken(state, token) {
            state.token = token
            if (token) {
                localStorage.setItem('token', token)
                // document.cookie('token', token)
            } else {
                localStorage.removeItem('token')
            }
        },
        updateUserInfo(state, userInfo) {
            state.userInfo = userInfo
        } 
    },
    actions: {
        // 需要保存到仓库里的数据 可以由actions来异步操作
        // 一般action直接用到组件里 但是action的名称一般常用大写命名
        // 目的是和组件里的方法区分开来
        async SYS_LOGIN({ commit }, data) {
            const result = await login(data)
            if (result.data.code === 0) {
                commit('updateToken', result.data.token)
                return true
            } else {
                return false
            }
            

            // 原始语法
            
            // login(data).then(res => {
            //     return new Promise(r => {
            //         if (res.data.code === 0) {
            //             r(true)
            //         } else {
            //             r(false)
            //         }
            //     })
            // })

        },
        LOGOUT({ commit }) {
            commit('updateToken', null)
        }
    },
}