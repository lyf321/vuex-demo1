import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home')
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('@/pages/Todos')
    },
    {
      path: '/todos/finish',
      name: 'finish',
      component: () => import('@/pages/Todos')
    },
    {
      path: '/todos/unfinish',
      name: 'unfinish',
      component: () => import('@/pages/Todos')
    },
    {
      path: '/count',
      component: () => import('@/components/Count')
    }
  ]
})
