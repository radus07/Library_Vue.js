import { myUserService } from '../../api/user.service'

const state = {
  user: {},
  unauthorized: {}
}

const mutations = {
  setUser (state) {
    myUserService.getUser()
      .then((response) => {
        state.user = (response) ? {isLogged: !!localStorage.getItem('user'), details: response}
          : state.user = {isLogged: !!localStorage.getItem('user')}
      })
  },
  setUnauthorized (state, data) {
    state.unauthorized = data.data
  }
}

const actions = {
  updateUserDetails ({commit}) {
    return new Promise((resolve, reject) => {
      commit('setUser')
      resolve()
    })
  },
  setUnauthorized ({commit}, data) {
    commit('setUnauthorized', {data})
  }
}

const getters = {
  getUserDetails (state) {
    return state.user
  },
  getUnauthorized (state) {
    return state.unauthorized
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
