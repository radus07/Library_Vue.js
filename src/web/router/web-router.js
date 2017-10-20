import Web from '../components/web'
import Home from '../components/home/home'
import SignIn from '../components/sign_in/sign_in'
import Register from '../components/register/register'

const webRouter = [
  {
    path: '/',
    redirect: {name: 'web.home'}
  },
  {
    path: '/web',
    component: Web,
    children: [
      { path: '', redirect: { name: 'web.home' } },
      { path: 'home', name: 'web.home', component: Home, meta: { title: 'Home Page' } },
      { path: 'sign_in', name: 'web.sign_in', component: SignIn, meta: { title: 'Sign in' } },
      { path: 'register', name: 'web.register', component: Register, meta: { title: 'Register Page' } }
    ]
  }
]

export default webRouter
