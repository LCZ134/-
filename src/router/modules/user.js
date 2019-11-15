import Home from '@/components/home.vue'
import Model from '@/components/model.vue'

export default {
  path: '/blogpost',
  name: '用户管理',
  component: Home,
  meta: {
    title: '博客',
    showTab: false
  },
  IsHidden: true,
  children: [{
    path: '/blogpostlist',
    name: '文章列表',
    component: Model,
    meta: {
      title: '文章列表',
      auth: true,
      showTab: true
    },
    IsHidden: true,
  }, {
    path: '/blogposteditor',
    name: '文章编辑',
    component: Model,
    meta: {
      title: '文章编辑',
      auth: true,
      showTab: true
    },
    IsHidden: true,
  }, {
    path: '/blogposteditor/:id',
    name: '文章编辑',
    component: Model,
    meta: {
      title: '文章编辑',
      auth: true,
      showTab: true
    },
    IsHidden: false,
  }]
}