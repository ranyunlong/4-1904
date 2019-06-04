import Vue from 'vue';
import Vuex from 'vuex';

import { menu } from './modules/menu'

// Vuex 也是一个插件
// mixins 利用混入把所有的数据混入到每一个组件里
Vue.use(Vuex);


export default new Vuex.Store({
    // 仓库里的真实数据
    state: {
        count: 0,
        userInfo: {},
        sysMenus: [],
    },
    getters: {
        // 查询count 只能查询不能修改
        myCount(state) {
            //state里的任意数据都不能做修改只能在mutation里做出修改
            return state.count
        },
        userInfo(state) {
            return state.userInfo
        },
        sysMenus(state) {
            return state.sysMenus
        }
    },
    // 修改仓库的数据
    mutations: {
        // 添加count
        addCount(state) {
            state.count++;
        },
        // 减少count
        reduceCount(state) {
            state.count--;
        },
        changeCount(state, payload) {
            state.count = payload
        }
    },
    actions: {
        CHANGE_COUNT(options, data) {
            const { commit, dispatch, getters } = options
            // 他只能通过commit触发 mutations来修改数据
            // 他也可以 通过 dispatch 触发另一个action
            // 他还可以通过getter来查询数据getters
            commit('addCount')
        },
    },
    // 分配管理store
    modules: {
        menu
    }
})