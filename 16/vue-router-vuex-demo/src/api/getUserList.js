import { http } from "./http";

/**
 * 获取用户列表
 */
export function getUserList(params) {
    return http.get('/sys/user/list', {
        // axios 查询字符串参数 用params来传递
        params
    })
}