import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import s from './App.module.css'
import { Posts } from './pages/Posts/Posts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './pages/About/About'
import { Error } from './pages/Error/Error'
import { Home } from './pages/Home/Home'
import { AppRouter } from './components/AppRouter/AppRouter'
import { AuthCountext } from './context/authContext'
import { useState } from 'react'

export const App = () => {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <AuthCountext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <div className={s.app}>
          <Header />
          <Sidebar />
          <div className={s.content}>
            <AppRouter />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthCountext.Provider>
  )
}
