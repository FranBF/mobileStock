import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginStart, loginSuccess, loginFailure } from '../redux/userSlice'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

export function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUsername = (e) => {
    e.preventDefault()
    const value = e.target.value
    setUsername(value)
  }

  const handlePassword = (e) => {
    e.preventDefault()
    const value = e.target.value
    setPassword(value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch(loginStart())
    try {
      const res = await axios.post('http://localhost:3000/api/users/signin', { username, password }, {
        headers: {
          Authorization: 'Bearer access_token'
        },
        withCredentials: true
      })
      dispatch(loginSuccess(res.data))
      navigate('/')
    } catch (error) {
      dispatch(loginFailure(error))
    }
  }

  return (
    <div className='flex justify-center items-center w-full h-full shadow-lg shadow-black'>
      <div className='flex flex-col border-[1px] border-gray-400 w-2/6 h-1/2 rounded-lg justify-around'>
        <div className='flex flex-col ml-4'>
          <label className='font-bold text-xl'>Nombre de usuario</label>
          <input type='text' className='w-11/12 mt-2 rounded-md border-2 border-black' onChange={handleUsername} />
        </div>
        <div className='ml-4'>
          <label className='font-bold text-xl'>Contraseña</label>
          <input type='text' className='w-11/12 rounded-md border-2 border-black mt-2' onChange={handlePassword} />
        </div>
        <div>
          <button className='mb-4 w-3/4 h-12 rounded-full bg-blue-400 self-center hover:bg-blue-200' onClick={handleLogin}>Iniciar sesión</button>
          <Link to='/'>Home</Link>
        </div>
      </div>
    </div>
  )
}
