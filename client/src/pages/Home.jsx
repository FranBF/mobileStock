import axios from 'axios'
import { useEffect, useState } from 'react'

export function Home () {
  const [data, setData] = useState([])

  const handleFetch = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/devices', {
        headers: {
          Authorization: 'Bearer access_token'
        },
        withCredentials: true
      })
      setData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleFetch()
  }, [])
  return (
    <div className='mt-12'>
      <h1>
        {data.map(m => (
          <p key={m._id}>{m.model}</p>
        ))}
      </h1>
    </div>
  )
}
