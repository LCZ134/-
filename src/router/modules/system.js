import Home from '@/components/home.vue'
import Model from '@/components/model.vue'

export default {
  path: '/system',
  name: '系统设置',
  component: Home,
  meta: {
    title: '系统设置',
    showTab: false
  },
  icon: 'el-icon-s-tools',
  IsHidden: true,
  children: [{
    path: '/setting',
    name: '设置',
    component: Model,
    meta: {
      title: '设置',
      auth: true,
      showTab: true
    },
    IsHidden: true,
  }, {
    path: '/logout',
    name: '退出',
    meta: {
      title: '退出',
      auth: true,
      showTab: false
    },
    IsHidden: true,
  }]
}