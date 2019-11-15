import Login from '@/components/login.vue'

import BlogPost from './modules/blog'
import System from './modules/system'
import commont from './modules/comment'
import Home from './modules/home'
import Author from './modules/authority'

//侧边栏
const frameIn = [
  Home,
  BlogPost,
  Author,
  commont,
  System,

]

const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录',
      showTab: false
    },
    IsHidden: false,
  }
]

export default [
  ...frameIn,
  ...frameOut,
]