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
        addItem.amount++
        return
      }
      state.cart.push(payload)
    }
  },
  actions: {
    addItem ({ commit }, payload) {
      commit('ADD_ITEM', payload)
    }
  }
}

export default productStore
