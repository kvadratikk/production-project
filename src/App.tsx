import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { useTheme } from './theme/useTheme'

import { AboutPageAcync } from './pages/AboutPage/AboutPage.async'
import { MainPageAcync } from './pages/MainPage/MainPage.async'

import './styles/index.scss'
import { classNames } from './helpers/classNames/classNames'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPageAcync />} />
          <Route path='/about' element={<AboutPageAcync />} />
        </Routes>
      </Suspense>
    </div>
  )
}
