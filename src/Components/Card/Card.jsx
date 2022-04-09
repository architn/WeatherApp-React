/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../Card/Card.css'


function Card(props) {
  return (
    // add col-2 here
      <div id='weatherCard' className="card">
          <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="Card image cap" id='icon' />
    
          <h5>{props.day}</h5>
          <p>MAX TEMP: {props.maxTemp}&deg;F</p>
          <p>MIN TEMP: {props.minTemp}&deg;F</p>
          <p>TIME: {props.hour}:00</p>
  </div>
  )
}

export default Card