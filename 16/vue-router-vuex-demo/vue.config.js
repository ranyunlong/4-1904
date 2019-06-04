module.exports = {
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