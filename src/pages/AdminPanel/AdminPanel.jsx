import { useContext } from 'react'
import s from './AdminPanel.module.css'
import { AuthCountext } from '../../context/authContext'
import { Navigate } from 'react-router-dom'

export const AdminPanel = (props) => {
  const { isAuth } = useContext(AuthCountext)

  if (!isAuth) {
    return <Navigate to="/login" />
  }

  return (
    <div className={s.adminPanel}>
      <h1>Admin panel</h1>
    </div>
  )
}
