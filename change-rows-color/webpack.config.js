const path=require('path') //导入node.js中专门操作路径的模块。

module.exports = {
    mode: 'development' ,//mode 用来指定构建模式，可选值有development和production
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 9090
    },
    entry: path.join(__dirname,'./src/index.js'), //打包入口文件的路径。
    output: {
        path:path.join(__dirname,'./dist'), //输出文件的存放路径。
        filename: 'bundle.js'
    }
}