import Vue from 'vue'
import Vuex from 'vuex'
import { myUserService } from '../service/myUser.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser () {
      myUserService.getUser()
        .then((response) => {
          this.state.user = {isLogged: !!localStorage.getItem('user'), details: response}
        })
    }
  },
  actions: {
    updateUserDetails ({commit}) {
      return new Promise((resolve, reject) => {
        commit('setUser')
        resolve()
      })
    }
  },
  getters: {
    getUserDetails (state) {
      return state.user
    }
  }
})
