# 问题汇总

## 01.vue初体验

1.vue内容编写在script标签内。
2.格式为new Vue({....})
3.data后有冒号，非方法名。
4.el后面内容均为单引号，且带逗号。

## 02.内容渲染指令

1. 采用v-text不显示内容。答复：el: 'app' 缺少#
2. v-text指令会覆盖元素内的默认的值。

### 疑问

1. OK插值表达式不会覆盖默认文本的内容，未看出优点。答复：整个标签内容消失。
2. v-html元素。

## 03.属性绑定指定

1. 在插值表达式中可以直接计算。 {{1+1}}
2. 反转计算。
3. v-bind 简写为:

## 04.事件绑定

1. v-on 简写@
2. methods后不需要带冒号。
3. 原生事件@click @input @keyup @change

## 05.事件参数对象

1. 可以传入原生dom对象 $event，使用方法e.target.style.backgroundColor = 

## 06.事件修饰符

1. 可用@click.stop='' 来阻止事件冒泡。
2. @click.prevent='' 阻止a链接跳转。

## 07.按钮修饰符

1. 可监听esc\enter事件。

## 08.双向绑定指令

1. v-model双向绑定指令。
2. change事件。
3. [原生事件](https://www.cnblogs.com/yuanjili666/p/11648898.html)
4. 遗留问题：想通过e对象获取到选中的值，未实现。

## 09.v-model修饰符

1. v-model.number 自动将输入内容转换为数值类型。
2. trim 自动过滤用户首尾空格。
3. lazy 在change 非input.

## 品牌列表案例

1. :与v-model区别
答复：属性绑定用：,v-model双向绑定。

