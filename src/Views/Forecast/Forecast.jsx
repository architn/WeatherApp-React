import React from 'react'
import { Link } from 'react-router-dom'
import '../Forecast/Forecast.css'
function Forecast({min, max, weatherType, weatherKey, dayOfWeek, loc}) {
  return (
    <div>
    <img src={`https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`} alt={weatherType} className='img'/>
        <h5><Link className='link' to={`/weekly/${loc}/${dayOfWeek}`}>{dayOfWeek.charAt(0).toUpperCase()+ dayOfWeek.slice(1)}</Link></h5>
            <p>Max Temp: {max}&deg;F</p>
            <p>Min Temp: {min}&deg;F</p>
            
    </div>
  )
}

export default Forecast