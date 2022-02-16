import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
import Management from '../views/Management.vue'
import Navigation from '@/components/Navigation'
import store from '@/store'

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
        component: Cart,
        beforeEnter: (to, from, next) => {
          if (store.getters['product/countItem'] === 0) {
            alert('กรุณาเลือกสินค้า')
            next({ name: 'Home' })
          } else if (!store.getters['user/checkIsAuth']) {
            alert('กรุณาเข้าสู่ระบบ')
            next({ name: 'Login' })
          } else {
            next()
          }
        }
      },
      {
        path: '/management',
        name: 'Management',
        component: Management,
        beforeEnter: (to, from, next) => {
          if (store.getters['user/checkUser'] === 'admin') {
            next()
          } else {
            alert('ไม่สามารถเข้าใช้งานได้')
            next({ name: 'Home' })
          }
        }
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
