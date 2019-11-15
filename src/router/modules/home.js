import Home from '@/components/home.vue'
import Model from '@/components/model.vue'
import Index from '@/components/index.vue'

export default {
  path: '/',
  name: '首页',
  component: Home,
  icon: 'el-icon-house',
  meta: { requireAuth: true },
  IsHidden: true,
  children: [{
      path: '',
      name: 'home',
      component: Index,
      meta: {
        title: '首页',
        auth: true,
        showTab: false
      },
      IsHidden: false,
    },
    {
      path: '/home',
      name: '首页',
      component: Index,
      meta: {
        title: '首页',
        auth: true,
        showTab: true
      },
      IsHidden: true,
    },
    {
      path: '/userlist',
      name: '用户管理',
      component: Model,
      meta: {
        title: '用户管理',
        auth: true,
        showTab: true
      },
      IsHidden: true,
    },
    {
      path: '/EventList',
      name: '请求日志',
      component: Model,
      meta: {
        title: '请求日志',
        auth: true,
        showTab: true
      },
      IsHidden: true,
    },
  ]
}