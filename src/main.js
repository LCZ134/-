import Vue from 'vue'
import App from './App'
import router from './router'

//全局样式
import "./assets/css/index.css";

//导入字体标
import "./assets/fonts/iconfont.css"

//引用element-ui,导入全部组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//解决elementui点击同一个路由，页面报错
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

import api from './api/index.js'
Vue.prototype.$http = api;


import store from './store/index'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})