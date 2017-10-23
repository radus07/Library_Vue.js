import { myUserService } from '../myUser.service'

export var routeGuardService = {
  doGuard (to, from, next) {
    if (to.meta.authenticated) {
      if (myUserService.isLogged) {
        next()
      } else {
        console.log('you must be logged')
        next({name: 'library.sign_in'})
      }
    } else {
      if (myUserService.isLogged) {
        console.log('you must be logged out')
        next({name: 'library.home'})
      } else {
        next()
      }
    }
  }
}
