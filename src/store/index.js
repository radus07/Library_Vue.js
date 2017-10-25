import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import library from './modules/library'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    library,
    auth: auth
  }
})
