import Web from '../components/web'
import Home from '../components/home/home'
import Login from '../components/login/login'
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
      { path: 'login', name: 'web.login', component: Login, meta: { title: 'Login Page' } },
      { path: 'register', name: 'web.register', component: Register, meta: { title: 'Register Page' } }
    ]
  }
]

export default webRouter
