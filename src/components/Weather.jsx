import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
const apiKey = process.env.WEATHER_API_KEY;

const api = {
    key: "3842f9cddbb4cd4c29c7a3d094ca7c4f" ,
    base: "https://api.openweathermap.org/data/2.5/weather?q="
}

const Weather = () => {

    const[city, setCity] = useState('');
    const[weatherData, setWeatherData] = useState('');
    
    useEffect(()=>{
        fetchData();
    }, []);


    const fetchData = async() =>{
        try{
            const response = await axios.get(`${api.base}${city}&units=metric&appid=${api.key}`);
            setWeatherData(response.data);
            console.log(response);
        } catch(error){
            console.error(error);
        }
    }

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
      };

    return (
        <div>
            <main>
                <div className='search-box'>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={handleInputChange}
                    />
                    <button type="submit">Get Weather</button>
                </form>
                    
                </div>
                <div>
                    {weatherData ? (
                        <>
                        <h2>{weatherData.name}</h2>
                        <p>Temperature: {weatherData.main.temp}°C</p>
                        <p>Description: {weatherData.weather[0].description}</p>
                        <p>Feels like : {weatherData.main.feels_like}°C</p>
                        <p>Humidity : {weatherData.main.humidity}%</p>
                        <p>Pressure : {weatherData.main.pressure}</p>
                        <p>Wind Speed : {weatherData.wind.speed}m/s</p>
                        </>
                    ) : (
                        <p>Loading weather data...</p>
                    )}
                </div>
                

            </main>
        </div>
    );
}

export default Weather;
