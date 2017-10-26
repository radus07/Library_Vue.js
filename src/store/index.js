import Vue from 'vue'
import Vuex from 'vuex'
import library from './modules/library'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    library,
    auth: auth
  }
})
