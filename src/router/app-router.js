import Vue from 'vue'
import Router from 'vue-router'
import libraryRoutes from '../library/routes/library-routes'
// import { myUserService } from '../service/myUser.service'
import { routeGuardService } from '../service/guard/route-guard.service'

Vue.use(Router)

var appRouter = new Router({
  mode: 'history',
  routes: libraryRoutes
})

appRouter.beforeEach((to, from, next) => {
  routeGuardService.doGuard(to, from, next)
})

export default appRouter
