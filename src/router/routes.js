import { About } from '../pages/About/About'
import { AdminPanel } from '../pages/AdminPanel/AdminPanel'
import { Error } from '../pages/Error/Error'
import { Home } from '../pages/Home/Home'
import { Login } from '../pages/Login/Login'
import { PostIdPage } from '../pages/PostIdPage/PostIdPage'
import { Posts } from '../pages/Posts/Posts'
import { PostsScroll } from '../pages/Posts/PostsScroll'
import { TestPage } from '../pages/TestPage/TestPage'

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/admin', element: <AdminPanel /> },
  { path: '/posts', element: <Posts /> },
  { path: '/posts_scroll', element: <PostsScroll /> },
  { path: '/posts/:id', element: <PostIdPage /> },
  { path: '/about', element: <About /> },
  { path: '/test_page', element: <TestPage /> },
  { path: '*', element: <Error /> },
]
