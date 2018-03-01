import Library from '@/views/library'
import Home from '@/components/library/home/home'
import SignIn from '@/components/library/sign_in/sign_in'
import Register from '@/components/library/register/register'
import Books from '@/components/library/book/books'
import BookList from '@/components/library/book/book-list'
import BookDetails from '@/components/library/book/book-details'

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
      },
      {
        path: 'books',
        component: Books,
        redirect: {name: 'library.books'},
        children: [
          {
            path: '',
            name: 'library.books',
            component: BookList,
            meta: {title: 'Books'}
          },
          {
            path: ':id',
            name: 'library.book',
            component: BookDetails,
            meta: {title: 'Book Details'}
          }
        ]
      }
    ]
  }
]

export default libraryRoutes