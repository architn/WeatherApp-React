/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Card from '../../Components/Card/Card.jsx';
import '../Today/Today.css'
import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Weekly from '../Weekly/Weekly.jsx';
import Search from '../../Components/Search/Search.jsx';


function Today() {
  
  const [weather, setWeather] = useState([]);
  // const [dailyWeatherForNextFiveDays, setDailyWeatherForNextFiveDays] = useState([]);
  const [city, setCity] = useState();

  function apiCall(){
    const apikey = "7f1c925f79e3379a32d791dda024e866";
    const daysOfWeek =[
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
        ]
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;
    fetch(url)
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(res => setWeather(res.list.map( df => {
              return {
                  day: daysOfWeek[new Date(df.dt_txt).getDay()],
                  hour: new Date(df.dt_txt).getHours(),
                  min_temp: df.main.temp_min,
                  max_temp: df.main.temp_max,
                  descr: df.weather[0].main,
                  icon: df.weather[0].icon,
                }
          })))
  }
  
  console.log(weather.at(33));
  return (
    <div className='container'>
      <Router>
      <h1>Weather Forecast</h1>
      <span>
      <input type="text" id='searchBar' placeholder='Enter City' value={city} onChange={e => setCity(e.target.value)}/>
      <button type='button' className='btn btn-warning' onClick={apiCall}>Search</button>  
      </span>
      <div className='row'>
        {weather && weather.map((i, index) => 
                <Card c key={index}
                minTemp={ ((i.min_temp - 273.15)*1.8 + 32).toFixed(2)} 
                maxTemp={ ((i.max_temp - 273.15)*1.8 + 32).toFixed(2)} 
                day={i.day} 
                icon={i.icon}
                hour={i.hour}/>
 )}
      </div>
      <Routes>
      <Route path='/' element={<Search />}></Route>
        <Route path='/weekly/:location/:dayOfWeek' element={<Weekly />}></Route>
      </Routes>
      </Router>
    </div>
      
  )
}

export default Today