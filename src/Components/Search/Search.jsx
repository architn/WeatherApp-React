/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Search/Search.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Forecast from '../../Views/Forecast/Forecast';

function Search() {
  const locationKey = "152909_PC"
   const apiKey = "GPj678ULmuG9iSznqBPOMkIYnpvFJJS6"
   const [weatherInfo, setWeatherInfo] = useState([])
   
   const padNum = (num) => {
       const stringNum = num + '';
       const stringlen = stringNum.length;

       if(stringlen === 1){
            return '0' + stringNum;
       }
       else{
           return stringNum;
       }
   }

   useEffect( () => {
    const daysOfWeek = [
      'Sunday', 
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ]

  fetch(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=${locationKey}?apikey=${apiKey}`
)
 .then(res => res.json())
 .then(res => setWeatherInfo(res.DailyForecasts.map( df => {
     return{
      min: df.Temperature.Minimum.Value, 
      max: df.Temperature.Maximum.Value,
      weatherKey: padNum(df.Day.Icon),
      weatherInfo: df.Day.IconPhrase,
      dayOfWeek: daysOfWeek[new Date(df.Date).getDay()],
     }
 } )))
});
   
  return (
    <div id='weatherSection' className='container'>
      <br/><br/>
      <h1>Weather in Boston, MA</h1>
            <div id='homePageForecast' className='row'>
            {weatherInfo && weatherInfo.map((i, index) => 
            (<div id='forecastSection' className='col-2' key={index}>
                <Forecast min={i.min} max={i.max} weatherType={i.weatherInfo} weatherKey={i.weatherKey} dayOfWeek={i.dayOfWeek}/>
                <br/>
            </div>))}
            </div>
       </div>
  )
  
}

export default Search