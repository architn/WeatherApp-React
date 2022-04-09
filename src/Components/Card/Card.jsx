/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../Card/Card.css'


function Card(props) {
  return (
    // add col-2 here
      <div id='weatherCard' className="col-2">
          <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="Card image cap" id='icon' />
    
          <h5>{props.day.charAt(0).toUpperCase()+ props.day.slice(1)}</h5>
          <p>Max Temp: {props.maxTemp}&deg;F</p>
          <p>Min Temp: {props.minTemp}&deg;F</p>
          <p className='time'>TIME: {props.hour}:00:00</p>
  </div>
  )
}

export default Card