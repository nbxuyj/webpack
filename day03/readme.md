# 笔记

## 01.过滤器的基本使用

1.js中string函数使用charAt、toUppercase、slice使用。

## 02.私有过滤器和全局过滤器

1. Vue.filter单词写错。
2. 品牌列表案例完善

## 03.watch侦听器

1. Property or method "username" is not defined on the instance but referenced during  答复：用户名写错。
2. 方式格式的侦听器：函数不会被自动触发。
3. 对象格式的侦听器：可通过immediate

## 08.侦听器 - deep选项

## 09.侦听器 - 用法总结

1. 如果要求侦听属性。需要对象属性名加引号。 例如： 'info.username'

## 10.计算属性 - 了解计算属性的应用场景

 1. 使用符号：`
 2. 示例：return `rgb(${this.r}, ${this.g}, ${this.b})`

## 12.axios - 使用axios发起基本的GET请求

 1. axios只负责发送网络请求。


## 13 axios结合

1. 调用 axios 之后，使用 async/await 进行简化
2. 使用 async/await 进行简化.



## vue-cli介绍与安装

1. 创建项目：vue create demo-frist
2. Babel 一定要装、TypeScrip 微软不选，Linter不选。
3. Sass/Scss选择Less.
4. Bable包选择单独文件还是合并到package.json中。
5. 保存后，在下载创建项目时可以选择指定的模板名称。

## 回顾get请求

1. params参数名不要写错。
2. 采用async/await简写时，const {data}  其中的data为返回串中的内容，不能用其它变量，可通过{data:res}来重命名。
3. then用起来麻烦, 加上await则返回真实数据。
4. 如果传参，直接对象传，不通过JSON.stringify转换，则Content-Type 不需要指定。
5. Post传参数，如果指定  'Content-Type': 'application/json'，则对象必须要通过JSON.stringify转换

## 23.vue组件的三个部分

2022年8月8日, AM 06:14:18
1.怎样创建和使用组件。


