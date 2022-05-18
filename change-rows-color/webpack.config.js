const path = require('path') //导入node.js中专门操作路径的模块。
const HtmlPlugin = require('html-webpack-plugin')

//创建html插件的实例对象。
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',//指定原文件的存放路径
    filename: './index.html', //指定生成的文件的存放路径。
})


// 注意：左侧的 { } 是解构赋值
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {

    // 在开发调试阶段，建议大家都把 devtool 的值设置为 eval-source-map
    // devtool: 'eval-source-map',
    // 在实际发布的时候，建议大家把 devtool 的值设置为 nosources-source-map 或直接关闭 SourceMap
    devtool: 'eval-source-map',


    mode: 'development',//mode 用来指定构建模式，可选值有development和production
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 9090
    },
    entry: path.join(__dirname, './src/index.js'), //打包入口文件的路径。
    output: {
        path: path.join(__dirname, 'dist'), //输出文件的存放路径。
        filename: 'js/bundle.js'
    },
    plugins: [htmlPlugin, new CleanWebpackPlugin()], //3.通过plugins节点，使用hmltPlugin插件生效。
    module: {
        rules: [
            // 定义了不同模块对应的 loader
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 处理 .less 文件的 loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // 处理图片文件的 loader
            // 如果需要调用的 loader 只有一个，则只传递一个字符串也行，如果有多个loader，则必须指定数组
            // 在配置 url-loader 的时候，多个参数之间，使用 & 符号进行分隔
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=470&outputPath=images' },
            // 使用 babel-loader 处理高级的 JS 语法
            // 在配置 babel-loader 的时候，程序员只需要把自己的代码进行转换即可；一定要排除 node_modules 目录中的 JS 文件
            // 因为第三方包中的 JS 兼容性，不需要程序员关心
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        alias: {
            // 告诉 webpack，程序员写的代码中，@ 符号表示 src 这一层目录
            '@': path.join(__dirname, './src/')
        }
    }
}