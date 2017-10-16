import Web from '@/components/web'
import Home from '@/components/home'
import Login from '@/components/login'

const webRouter = [
  {
    path: '/',
    redirect: '/web'
  },
  {
    path: '/web',
    component: Web,
    children: [
      { path: '', redirect: { name: 'home' } },
      { path: 'home', name: 'web.home', component: Home },
      { path: 'login', name: 'web.login', component: Login }
    ]
  }
]
export default webRouter
