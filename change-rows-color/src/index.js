// 1. 使用 ES6 导入语法，导入 jQuery
import $ from 'jquery'

//导入样式（在webpack中，一切皆模块，都可以
import a from './css/index.css'
import b from './css/index.less'
console.log(a)
//导入图片，得到图片文件。

import logo from './images/logo.jpg'
//给img标签的src属性赋值。
$(".box").attr('src', logo)


$(function () {
  // 奇数行为红色 green yellow
  $('li:odd').css('background-color', 'green');
  $('li:even').css('background-color', 'blue');

  // 0 是偶数
  // 1 是奇数

})


// 定义装饰器函数
function info(target) {
  target.info = 'Person info.'
}

// 定义一个普通的类
@info
class Person { }

console.log(Person.info)
