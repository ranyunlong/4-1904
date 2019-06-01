/**
 * 添加管理员
 */
import { http } from './http'

/**
 * 删除用户
 * @param { Array } data 
 */
export function deleteUser(data) {
    return http.post('/sys/user/delete', data)
}