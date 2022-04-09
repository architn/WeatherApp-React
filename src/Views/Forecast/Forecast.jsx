import React from 'react'
import '../Forecast/Forecast.css'
function Forecast({min, max, weatherType, weatherKey, dayOfWeek}) {
  return (
    <div>
    <img src={`https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`} alt={weatherType} className='img'/>
        <h5>{dayOfWeek}</h5>
            <p>Max Temp: {max}&deg;F</p>
            <p>Min Temp: {min}&deg;F</p>
            
    </div>
  )
}

export default Forecast