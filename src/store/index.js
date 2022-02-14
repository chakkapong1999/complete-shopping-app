import Vue from 'vue'
import Vuex from 'vuex'
import userStore from '@/store/user'
import productStore from '@/store/product'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: userStore,
    product: productStore
  }
})
