import Home from '@/components/home.vue'
import Model from '@/components/model.vue'

export default {
  path: '/autsdf',
  name: '权限管理',
  component: Home,
  icon: 'el-icon-document',
  meta: {
    title: '权限管理',
    showTab: false
  },
  IsHidden: true,
  children: [{
    path: '/sfasf',
    name: '角色列表',
    component: Model,
    meta: {
      title: '角色列表',
      auth: true,
      showTab: true
    },
    IsHidden: true,
  }, {
    path: '/dgfa',
    name: '权限列表',
    component: Model,
    meta: {
      title: '权限列表',
      auth: true,
      showTab: true
    },
    IsHidden: true,
  }]
}