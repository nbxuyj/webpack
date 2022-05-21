import Vue from 'vue'

//导入路由。
import VueRouter from 'vue-router'

// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}


//因为VueRouter是一个插件需要Use。
Vue.use(VueRouter)





//导入路由需要的页面。
import Show from "../pages/Show.vue";
import Upload from "../pages/Upload.vue";
import Find from "../pages/Find.vue";




//创建一个路由器对象并配置路由信息放到外面。
export default new VueRouter({
  routes: [
    {
        //请求路由的路径
        path: '/',
        //当前路由的组件。
        component: Find
  
      },
    {
      //请求路由的路径
      path: '/find',
      //当前路由的组件。
      component: Find

    },
    {
      //请求路由的路径
      path: '/upload',
      //当前路由的组件。
      component: Upload

    },
   

  ]

})

