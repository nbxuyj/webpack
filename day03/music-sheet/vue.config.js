const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  transpileDependencies: true,
  configureWebpack:{
    devtool:'source-map'
  }
  ,
  devServer: {
    open: false,
    host: '127.0.0.1',
    port: 8090,
    https: false,
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
    proxy: {
      '/api': {
       //target: 'http://pub.nbangsoft.com',
        target: 'http://localhost:13827',
        changeOrigin: true, //  是否跨域
        pathRewrite: {
          '^/api': '/api' //  重定向
        }
      },
      '/images': {
        //target: 'http://pub.nbangsoft.com/',
        target: 'http://localhost/',
        changeOrigin: true, //  是否跨域
        pathRewrite: {
          '^/images': '/images' //  重定向
        }
      },

    }
  },
})
