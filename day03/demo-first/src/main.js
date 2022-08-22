//导入这个包,得到vue的构造函数。
import Vue from 'vue'

//导入vue的根组件，
import App from './App.vue'
import Test from './Test.vue'

Vue.config.productionTip = false

//创建vue的实例对象。
new Vue({
  el:'#app',
  render: h => h(Test),
})

//.$mount('#app')
