import Vue from 'vue'
import Router from 'vue-router'
import libraryRoutes from '../library/routes/library-routes'
import store from '../../store'

Vue.use(Router)

var appRouter = new Router({
  mode: 'history',
  routes: libraryRoutes
})

appRouter.beforeEach((to, from, next) => {
  store.dispatch('auth/updateUserDetails')
    .then(() => {
      setDocumentTitle(to)
      doGuard(to, from, next)
    })
})

export default appRouter

let doGuard = (to, from, next) => {
  let user = store.getters['auth/getUserDetails']
  if (to.meta.authenticated) {
    if (user.isLogged) {
      next()
    } else {
      // Alert user must be logged
      console.log('you must be logged')
      setDocumentTitle(from)
      next({name: 'library.sign_in'})
    }
  } else {
    if (user.isLogged) {
      // Alert user must be logged out
      console.log('you must be logged out')
      next({name: 'library.home'})
    } else {
      next()
    }
  }
}

let setDocumentTitle = (route) => {
  document.title = route.meta.title
}
