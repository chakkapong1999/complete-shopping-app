const productStore = {
  namespaced: true,
  state: {
    cart: []
  },
  mutations: {
    ADD_ITEM (state, payload) {
      const addItem = state.cart.find((value) => {
        return value.product.productId === payload.product.productId
      })
      if (addItem) {
        addItem.amount += payload.amount
        return
      }
      state.cart.push(payload)
    },
    REMOVE_ITEM (state, payload) {
      const removeItem = state.cart.find((value) => {
        return value.product.productId === payload.product.product.productId
      })
      if (removeItem.amount > 1) {
        removeItem.amount -= payload.amount
      } else {
        removeItem.amount = 0
      }
    }
  },
  getters: {
    countItem: state => {
      let total = 0
      state.cart.forEach(element => {
        total += element.amount
      })
      return total
    },
    calculateTotalPrice: state => {
      let total = 0
      state.cart.forEach(element => {
        total += element.product.price * element.amount
      })
      return total
    }
  },
  actions: {
    addItem ({ commit }, payload) {
      commit('ADD_ITEM', payload)
    },
    removeItem ({ commit }, payload) {
      commit('REMOVE_ITEM', payload)
    }
  }
}

export default productStore
