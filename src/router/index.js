import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddNews from '../views/AddNews'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',    
    component: Home
  },
  {
    path: '/add',
    name: 'addNews',    
    component: () => import('../views/AddNews.vue')    
  },
  {
    path: '/detail/:id',
    name: 'detail',    
    component: () => import('../views/DetailNews.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
