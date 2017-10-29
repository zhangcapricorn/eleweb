import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/TaskOld/orderPage')
    },
    {
      path:'/background',
      name:'background-page',
      component: require('@/components/bgPage')
    },
    {
        path:'/task/OrderView',
        name:'taskOrderView',
        component: require('@/TaskOld/orderPage')
    },
    {
        path:'/task/List',
        name:'taskList',
        component: require('@/TaskOld/listPage')
    },
    {
        path:'/order/List',
        name:'orderList',
        component: require('@/Order/listPage')
    },
    {
        path:'/tasks/List',
        name:'tasksList',
        component: require('@/Task/list')
    },
    {
        path:'/tasks/Detail',
        name:'taskDetail',
        component: require('@/Task/detail')
    },
    {
        path:'/tasks/todoList',
        name:'taskTodoList',
        component: require('@/Task/todoList')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
