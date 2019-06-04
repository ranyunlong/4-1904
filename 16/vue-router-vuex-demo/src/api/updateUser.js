/**
 * 修改管理员
 */
import { http } from './http'

export function updateUser(data) {
    return http.post('/sys/user/update', data)
}