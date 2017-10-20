import Vue from 'vue'
import Router from 'vue-router'
import libraryRouter from '../library/router/library-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: libraryRouter
})
