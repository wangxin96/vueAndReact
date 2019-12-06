import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//icon图标
import '../src/font/iconfont.css'

//懒加载  下载npm i vue-lazyload -save  (看官网npm)
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('@/img/loading.jpg'),
  attempt: 1
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
