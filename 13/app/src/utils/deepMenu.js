/**
 * 递归菜单
 * @param { Array } menu 
 */
export function deepMenu(menu, parentId) {
    if (Array.isArray(menu)) {
        return menu.filter(item => {
            if (item.parentId === parentId) {
                item.children = deepMenu(menu, item.menuId)
                return true;
            }
        })
    }
}

// const menu =  [
//     { parentId: 0, menuId: 1 }, 
//     { parentId: 1, menuId: 2 },
//     { parentId: 1, menuId: 3 },
//     { parentId: 2, menuId: 4 }
// ]


// console.log(deepMenu(menu, 0))