import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import routes from './routes'

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {

  if (to.path === '/login' || to.path === '/logout') {
    sessionStorage.removeItem('user');
  }
  var user = sessionStorage.getItem('user');

  if (!user && to.path !== '/login') {
    next({
      path: '/login'
    });
  } else {
    next();
  }
})


export default router;