import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Abort from './components/abort/Abort'
import Login from './components/Login'
import Register from './components/Register'


Vue.use(VueRouter)

const routes = [
  {path:'/',component:Home},
  {path:'/menu',component:Menu},
  {path:'/admin',component:Admin},
  {path:'/abort',component:Abort},
  {path:'/login',component:Login},
  {path:'/register',component:Register}
]

const router = new VueRouter({
  routes,
  mode:'history'//去掉URL地址里的#
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
