import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

export function Navbar () {
  const [path, setPath] = useState(false)
  const { currentUser } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handlePath = () => {
    if (window.location.pathname === '/login') {
      setPath(true)
      console.log(path)
    } else {
      setPath(false)
    }
  }

  useEffect(() => {
    handlePath()
  }, [useLocation()])

  return (
    <>
      {!path && (
        <div className='flex items-center justify-between w-full h-12 bg-red-200 fixed'>
          <h1 className='ml-4 font-xl font-bold'>Control de móviles</h1>
          {currentUser ? (<p className='mr-4'>{currentUser.username}</p>) : (<Link to='/login' className='w-32 text-center border-gray-400 border-[1px] h-8 rounded-md mr-4'>Iniciar sesión</Link>)}
        </div>
      )}
    </>
  )
}
