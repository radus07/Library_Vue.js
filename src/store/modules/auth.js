import { myUserService } from '../../api/user.service'

const state = {
  user: {}
}

const mutations = {
  setUser (state) {
    myUserService.getUser()
      .then((response) => {
        state.user = (response) ? {isLogged: !!localStorage.getItem('user'), details: response}
          : state.user = {isLogged: !!localStorage.getItem('user')}
      })
  }
}

const actions = {
  updateUserDetails ({commit}) {
    return new Promise((resolve, reject) => {
      commit('setUser')
      resolve()
    })
  }
}

const getters = {
  getUserDetails (state) {
    return state.user
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
