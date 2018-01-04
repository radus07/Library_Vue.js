import Vue from 'vue'
import Router from 'vue-router'
import libraryRoutes from '../library/routes/library-routes'
import store from '../store/index'

Vue.use(Router)

const appRouter = new Router({
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
  if (to.meta.authenticated === undefined) {
    next()
  } else if (to.meta.authenticated) {
    if (user.isLogged) {
      next()
    } else {
      store.dispatch('auth/setUnauthorized', {isUnauthorized: true, path: to.path})
      setDocumentTitle(from)
      next({name: 'library.sign_in'})
    }
  } else {
    if (user.isLogged) {
      next({name: 'library.home'})
    } else {
      next()
    }
  }
}

let setDocumentTitle = (route) => {
  document.title = route.meta.title
}
