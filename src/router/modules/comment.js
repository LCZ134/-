import Home from '@/components/home.vue'
import Model from '@/components/model.vue'

export default {
  path: '/Comment',
  name: '商品管理',
  component: Home,
  icon: 'el-icon-s-comment',
  meta: {
    title: '商品管理',
    showTab: false
  },
  IsHidden: true,
  children: [{
      path: '/blogComment',
      name: '商品列表',
      component: Model,
      meta: {
        title: '商品列表',
        auth: true,
        showTab: true
      },
      IsHidden: true,
    },
    {
      path: '/leavewyrd',
      name: '分类参数',
      component: Model,
      meta: {
        title: '分类参数',
        auth: true,
        showTab: true
      },
      IsHidden: true,
    },
    {
      path: '/leaveword',
      name: '商品分类',
      component: Model,
      meta: {
        title: '商品分类',
        auth: true,
        showTab: true
      },
      IsHidden: true,
    },
  ]
}