export const menu = {
    // 命名空间
    namespaced: true,
    state: {
        menuList: ['1','2'],
    },
    mutations: {
        changeMenu(state, menuList) {
            state.menuList = menuList;
        }
    },
    getters: {
        menuList(state)  {
            return state.menuList
        }
    },
    actions: {

    },
}