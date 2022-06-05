import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


Vue.prototype.axios = axios.create({
  baseURL:'/api/'
  // transformRequest: [//对数据转换成类似get传参的模式
  //  data => qs.stringify(data)
  //]

})
 




//引用ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入的是插件，需要use.
Vue.use(ElementUI);

//引入icons
import './icons';

//默认index.js可以省略。
import router from './router'


import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//使用dayJS过滤器。
var  dayjs=require('dayjs')
Vue.prototype.dayjs=dayjs

//使用：this.dayjs(val)
//this.dayjs({{ModifyTime}}).format("YYYY-MM-DD HH:mm:ss")
Vue.filter('dateFormat', function (time) {
  const dtStr = dayjs(time).format('YYYY-MM-DD HH:mm:ss')
  return dtStr
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
