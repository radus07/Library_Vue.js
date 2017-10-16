import Vue from 'vue'
import Router from 'vue-router'
import webRouter from './web-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: webRouter
})
