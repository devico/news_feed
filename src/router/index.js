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
    name: 'add-news',    
    component: AddNews
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
