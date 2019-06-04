/**
 * 获取菜单列表
 */

import { http } from "./http";

export function getMenuList() {
    return http.get('/sys/menu/list')
}