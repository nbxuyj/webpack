const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = defineConfig({

  transpileDependencies: true,
  configureWebpack: {
    devtool: 'source-map'
  }
  ,
  chainWebpack(config) {
    // set svg-sprite-loader

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })



    // config.module
    //   .rule('svg')
    //   .exclude.add(resolve('src/icons'))
    //   .end()
    // config.module
    //   .rule('icons')
    //   .test(/\.svg$/)
    //   .include.add(resolve('src/icons'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   })
    //   .end()
  },
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
        // target: 'http://pub.nbangsoft.com/',
        target: 'http://localhost/',
        changeOrigin: true, //  是否跨域
        pathRewrite: {
          '^/images': '/images' //  重定向
        }
      },

    }
  },
})
