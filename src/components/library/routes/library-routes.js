import Library from '../components/library'
import Home from '../components/home/home'
import SignIn from '../components/sign_in/sign_in'
import Register from '../components/register/register'

const libraryRoutes = [
  {
    path: '/',
    component: Library,
    children: [
      {path: '', redirect: {name: 'library.home'}},
      {
        path: 'home',
        name: 'library.home',
        component: Home,
        meta: {title: 'Home Page'}
      },
      {
        path: 'sign_in',
        name: 'library.sign_in',
        component: SignIn,
        meta: {title: 'Sign in', authenticated: false}
      },
      {
        path: 'register',
        name: 'library.register',
        component: Register,
        meta: {title: 'Register Page', authenticated: false}
      }
    ]
  }
]

export default libraryRoutes
