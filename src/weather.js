import axios from "axios";
import { useState } from "react"
import './index.css';
const Weather=()=>{
    const[city,setcity]=useState(" ");
    const[weather,setweather]=useState(null);
    const[error,seterror]=useState(" ");
    const api="59dd1b53cc6766269e6bf0d5bfedf988";
    const fetchweather=async()=>{
        if(!city){
            seterror("please enter a city");
            return;
        }
        try{
            const response=await axios.get( 
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`);
                setweather(response.data);
                seterror("");
            }catch(err){
                seterror("");
                setweather(null);
             }
            
            };
            return(
                <div className="weather-container">
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setcity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchweather}>Get Weather</button>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity} %</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
        
    
