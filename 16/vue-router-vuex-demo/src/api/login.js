import { http } from "./http";

/**
 * 登录接口
 * 
 * 要传递的参数有哪些
 * data 
 * 
 * "username": "string",
 * "password": "string",
 *  "captcha": "string",
 *  "uuid": "string"
 */

export function login(data) {
    // 处理更多的事情
    return http.post('/sys/login', data)
}