import Home from '@/components/home.vue'
import Model from '@/components/model.vue'

export default {
  path: '/blogpost',
  name: '订单管理',
  component: Home,
  icon: 'el-icon-document',
  meta: {
    title: '订单管理',
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
      name: '添加文章',
      component: Model,
      meta: {
        title: '添加文章',
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
    },
    {
      path: '/taglist',
      name: '标签列表',
      component: Model,
      meta: {
        title: '标签列表',
        auth: true,
        showTab: true
      },
      IsHidden: true,
    },
    {
      path: '/Danmus',
      name: '弹幕列表',
      component: Model,
      meta: {
        title: '弹幕列表',
        auth: true,
        showTab: true
      },
      IsHidden: true,
    },
    {
      path: '/Notice',
      name: '公告管理',
      component: Model,
      meta: {
        title: '公告管理',
        auth: true,
        showTab: true
      },
      IsHidden: true,
    },
  ]
}