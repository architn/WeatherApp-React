import React from 'react'
import{useParams} from 'react-router-dom';
import { useState } from 'react'
import Card from '../../Components/Card/Card';
import { useEffect } from 'react'

function Weekly() {
  const {location} = useParams();
  const {dayOfWeek} = useParams();
  const [weather, setWeather] = useState([]);
  const [filteredWeather, setFilteredWeather] = useState([]);
  
  // const [city, setCity] = useState();

  useEffect ( () =>{
    const apikey = "22db4fb44293088d1ce4e2081f2f11d4";
    const daysOfWeek =[
        'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
        ]
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apikey}`;
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
          .then(setFilteredWeather(weather.filter( w => 
            w.day.includes(dayOfWeek)
          )) )
  }, [location, weather, dayOfWeek]);

  return (
    <div className='container'>
      <br/><br/>     
      <div className='row'>
      
      <h4>Weather conditions for {location}</h4>
      <br/><br/> 
      {filteredWeather && filteredWeather.map((i, index) => 
                <Card c key={index}
                minTemp={ ((i.min_temp - 273.15)*1.8 + 32).toFixed(2)} 
                maxTemp={ ((i.max_temp - 273.15)*1.8 + 32).toFixed(2)} 
                day={i.day} 
                icon={i.icon}
                hour={i.hour}/>
            )}
            
            </div>
           
      </div>
  )
}

export default Weekly
