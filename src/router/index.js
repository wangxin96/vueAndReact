import Vue from 'vue'
import VueRouter from 'vue-router'
//现在就是将分装好的路由引入进来
import  routes from './routerConfig'
import { listenerCount } from 'cluster'

Vue.use(VueRouter)
//原来写在这里的路由放在了routerConfig.js里

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由守卫
router.beforeEach((to,from,next)=>{
  // if(list.includes(to.name)){
  //   if(!window.localStorage.token){
  //     next('/login')
  //   }else{
  //     next()
  //   }
  // }else{
  //   next()
  // }
  if(to.matched.some(item=>item.meta.requiresAuth)){
    if(!window.localStorage.token){
      next({
        path:'/login',
        query:{
          redirect:to.fullPath
        }
      })
    }else{
      next()
    }
  }
})

export default router
