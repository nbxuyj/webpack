import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


//引用ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入的是插件，需要use.
Vue.use(ElementUI);


//默认index.js可以省略。
import router from './router'




new Vue({
  render: h => h(App),
  router
}).$mount('#app')
