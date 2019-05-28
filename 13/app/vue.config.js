module.exports = {
    // express
    devServer: {
        proxy: {
            '/api': {
                // 转发的目标地址
                target: "http://console.ranyunlong.com:8080",
                // 路径重写 规则
                pathRewrite: {
                    "^/api":"/renren-fast"
                } 
            }
        }
    }
}

// app.use('/api', (req, res, next) => {
//     const url = req.url.replace(/^/api/, "/renren-fast")
//     http.request({
//         url,
//         options: {
            
//         }
//     }, (q) => {
        
//     })
// })

// http://console.ranyunlong.com:8080/renren-fast/sys/login

// localhost:8080/api/sys/login