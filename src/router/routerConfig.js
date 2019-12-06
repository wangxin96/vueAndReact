//和router index.vue 里路由的配置是一样的
const routes = [
    //一级路由
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/registry',
      name: 'registry',
      component: () => import('../views/registry/registry.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/detail/detail.vue')
    },
    
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/index/index.vue'),
      //二级路由
      children:[
        {
          path: 'home',
          name:'home',
          component: () => import('../views/index/home/home.vue'),
        },
        {
          path: 'car',
          name:'car',
          component: () => import('../views/index/car/car.vue'),
        },
        {
          path: 'classify',
          name:'classify',
          component: () => import('../views/index/classify/classify.vue'),
        },
        {
          path: 'my',
          name:'my',
          component: () => import('../views/index/my/my.vue'),
        },
      ]
    },
    //重定向
    {
      path:"/",
      redirect: "/index/home"
    }
  ]

// 导出routes 在router index.vue里引入
export default routes  