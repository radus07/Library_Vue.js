import Vue from 'vue'
import Router from 'vue-router'
import libraryRoutes from '../library/routes/library-routes'
import store from '../store'

Vue.use(Router)

var appRouter = new Router({
  mode: 'history',
  routes: libraryRoutes
})

appRouter.beforeEach((to, from, next) => {
  store.dispatch('updateUserDetails')
    .then(() => {
      doGuard(to, from, next)
    })
})

export default appRouter

let doGuard = (to, from, next) => {
  let user = store.getters.getUserDetails
  if (to.meta.authenticated) {
    if (user.isLogged) {
      next()
    } else {
      console.log('you must be logged')
      next({name: 'library.sign_in'})
    }
  } else {
    if (user.isLogged) {
      console.log('you must be logged out')
      next({name: 'library.home'})
    } else {
      next()
    }
  }
}
