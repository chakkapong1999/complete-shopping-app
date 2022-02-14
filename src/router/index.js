import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
import Navigation from '@/components/Navigation'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Navigation,
    redirect: '/shopping',
    children: [
      {
        path: '/shopping',
        name: 'Shopping',
        component: Home
      },
      {
        path: '/shopping/cart',
        name: 'Cart',
        component: Cart
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
