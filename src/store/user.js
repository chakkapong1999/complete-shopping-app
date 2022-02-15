const userStore = {
  namespaced: true,
  state: {
    user: {},
    isAuth: false
  },
  mutations: {
    SET_ISAUTH (state, payload) {
      state.isAuth = payload
    },
    SET_USER (state, payload) {
      state.user = payload
    }
  },
  getters: {
    checkIsAuth: state => {
      return state.isAuth
    }
  },
  actions: {
    setIsAuth ({ commit }, payload) {
      commit('SET_ISAUTH', payload)
    },
    setUser ({ commit }, payload) {
      commit('SET_USER', payload)
    }
  }
}

export default userStore
