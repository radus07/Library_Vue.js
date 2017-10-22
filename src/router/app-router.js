import Vue from 'vue'
import Router from 'vue-router'
import libraryRouter from '../library/router/library-router'
import { myUserService } from '../service/myUser.service'
Vue.use(Router)

var appRouter = new Router({
  mode: 'history',
  routes: libraryRouter
})

appRouter.beforeEach((to, from, next) => {
  // check if that route needs an authenticated user
  if (to.meta.authenticated) {
    document.title = to.meta.title
    if (!myUserService.isLogged) {
      console.log('you must be logged')
      document.title = from.meta.title
      next({name: 'library.sign_in'})
    } else {
      next()
    }
  } else {
    document.title = to.meta.title
    if (myUserService.isLogged) {
      console.log('you must be logged out')
      next({name: 'library.home'})
    } else {
      next()
    }
  }
})

export default appRouter
