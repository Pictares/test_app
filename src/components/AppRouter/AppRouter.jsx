import { Route, Routes } from 'react-router-dom'
import { About } from '../../pages/About/About'
import { Home } from '../../pages/Home/Home'
import { Posts } from '../../pages/Posts/Posts'
import { Error } from '../../pages/Error/Error'
import { PostIdPage } from '../../pages/PostIdPage/PostIdPage'
import { routes } from '../../router/routes'

export const AppRouter = (props) => {
  return (
    <Routes>
      {routes.map((r) => (
        <Route key={r.path} path={r.path} element={r.element} />
      ))}
    </Routes>
  )
}
