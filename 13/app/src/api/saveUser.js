/**
 * 添加管理员
 */
import { http } from './http'

export function saveUser(data) {
    return http.post('/sys/save/user', data)
}