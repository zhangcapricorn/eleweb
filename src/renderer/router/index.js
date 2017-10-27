import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/Task/orderPage')
    },
    {
      path:'/background',
      name:'background-page',
      component: require('@/components/bgPage')
    },
    {
        path:'/task/OrderView',
        name:'taskOrderView',
        component: require('@/Task/orderPage')
    },
    {
        path:'/task/List',
        name:'taskList',
        component: require('@/Task/listPage')
    },
    {
        path:'/order/List',
        name:'orderList',
        component: require('@/Order/listPage')
    },
    {
        path:'/account/List',
        name:'accountList',
        component: require('@/Account/accountList')
    },
    {
        path:'/account/Detail',
        name:'accountDetail',
        component: require('@/Account/accountDetail')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
