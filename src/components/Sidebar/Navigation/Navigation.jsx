import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'

export const Navigation = (props) => {
  return (
    <div className={s.navigation}>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/posts">Posts (btns pagin.)</NavLink>
      </div>
      <div>
        <NavLink to="/posts_scroll">Posts (scroll pagin.)</NavLink>
      </div>
      <div>
        <NavLink to="/about">About</NavLink>
      </div>
      <div>
        <NavLink to="/login">Login</NavLink>
      </div>
      <div>
        <NavLink to="/admin">Admin panel</NavLink>
      </div>
      <div>
        <NavLink to="/test_page">Test page</NavLink>
      </div>
    </div>
  )
}
