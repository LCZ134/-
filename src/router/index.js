import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login.vue'
import Home from '@/components/home.vue'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
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