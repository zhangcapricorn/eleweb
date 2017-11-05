import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/TaskOld/orderPage')
    // },
    // {
    //   path:'/background',
    //   name:'background-page',
    //   component: require('@/components/bgPage')
    // },
    // {
    //     path:'/task/OrderView',
    //     name:'taskOrderView',
    //     component: require('@/TaskOld/orderPage')
    // },
    {
        path:'/',
        name:'landing-page',
        component: require('@/Task/list')
    },
    {
        path:'/tasks/List',
        name:'tasksList',
        component: require('@/Task/list')
    },
    {
        path:'/tasks/Detail/:id',
        name:'taskDetail',
        component: require('@/Task/detail')
    },
    {
        path:'/tasks/todoList/:id',
        name:'taskTodoList',
        component: require('@/Task/todoList')
    },
    {
        path:'/account/statistics',
        name:'accountStatistics',
        component: require('@/Account/statistics')
    },
    {
        path:'/account/list',
        name:'accountList',
        component: require('@/Account/list')
    },
    {
        path:'/account/detail/:id',
        name:'accountDetail',
        component: require('@/Account/detail')
    },
    {
        path:'/browserPath/list',
        name:'browserPathList',
        component: require('@/BrowserPath/list')
    },
    {
        path:'/browserPath/detail/:id',
        name:'browserPathDetail',
        component: require('@/BrowserPath/detail')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
