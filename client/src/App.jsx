import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'

export function App () {
  return (
    <div className='flex flex-col w-screen h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}
