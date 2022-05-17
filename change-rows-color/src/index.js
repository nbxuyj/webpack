// 1. 使用 ES6 导入语法，导入 jQuery
import $ from 'jquery'

$(function(){
  // 奇数行为红色 green yellow
  $('li:odd').css('background-color', 'red');
  $('li:even').css('background-color', 'blue');

  // 0 是偶数
  // 1 是奇数

})