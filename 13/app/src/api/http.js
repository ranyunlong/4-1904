import axios from 'axios';

axios.post('/api/sys/login', {})

// 创建一个请求模板
export const http = axios.create({
    // 设置一个基础路径
    baseURL: '/api'
})

// 拦截请求的 每次请求都会经过这个方法
http.interceptors.request.use((options) => {
    // console.log('config:',config)
    // options.headers = {
    //     ...options.headers,
    //     // 登陆成功后的token 必须每次带着去请求 要不然会被服务器拒绝
    //     token: localStorage.getItem('token')
    // }
    options.headers.token = localStorage.getItem('token')
    
    return options
})


// 拦截响应 每次收到响应都会经过这个方法
http.interceptors.response.use((response) => {
    // console.log('response:',response)
    return response
})

// /sys/login
// /sys/list