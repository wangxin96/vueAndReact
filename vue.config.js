module.exports={
    lintOnSave:false,
    //在webpack 里的配置里的开发中  devServer-proxy 照抄(2)
    devServer:{
        proxy:{
            "/api":{
                target:"http://106.13.85.240:7002/", //网上的数据请求
                pathRewrite: {"^/api" : ""},
                changeOrigin:true                  //允许替换(自己要背的)
            }
        }
    }
}