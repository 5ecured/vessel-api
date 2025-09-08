import React, { useEffect, useState } from 'react'
import { fetchAPI } from './api'

const App = () => {
  const [api, setApi] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAPI()
        setApi(data)
      } catch (error) {
        console.error('Error fetching API:', error)
      }
    }

    fetchData()
  }, [])

  console.log(api)

  return (
    <div>App</div>
  )
}

export default App