import React, { useEffect, useState } from 'react'
import { fetchAPI } from './api'
import ShipData from './components/ShipData/ShipData'

const App = () => {
  const [api, setApi] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAPI()
        setApi(data)
      } catch (error) {
        setError(error)
        console.error('Error fetching API:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!api || api.length === 0) return <div>No data available</div>

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>PT MIS GPS KAPAL</h1>
      <hr />
      {api.map(shipObject => <ShipData key={shipObject.VName} data={shipObject} />)}
    </div>
  )
}

export default App