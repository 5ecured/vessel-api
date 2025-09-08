import React from 'react'
import './style.css'

const ShipData = ({ data }) => {
    const { VName, Status, Speed, DateTime, Lat, Lon } = data

    // 1. Convert to Date object
    const date = new Date(DateTime.replace(' ', 'T')) // 'T' makes it ISO-compatible

    // 2. Format parts
    let formatted = ''

    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'short' }) // "Sep"
    const year = date.getFullYear()
    const time = date.toTimeString().split(' ')[0] // "13:59:59"

    formatted = `${day} ${month} ${year} - ${time}`

    return (
        <>
            <h2>{VName}</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Status</th>
                        <th>Speed</th>
                        <th>Waktu</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                    <tr>
                        <td>{Status}</td>
                        <td>{Speed}</td>
                        <td>{formatted}</td>
                        <td>{Lat}</td>
                        <td>{Lon}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ShipData