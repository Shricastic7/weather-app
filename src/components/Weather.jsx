import React from 'react';
import { useState } from 'react';
const apiKey = process.env.WEATHER_API_KEY;

const api = {
    key: apiKey ,
    base: "https://api.openweathermap.org/data/2.5/"
}

const Weather = () => {

    const [query, setQuery] = useState('');

    const search = event =>{
        if(event.key === 'Enter'){
            fetch(`${api.base}weather?id=524901&appid=${api.key}`)
            .then(res => res.json())
            .then(result =>{
                console.log(result);
            })
        }
    }

    return (
        <div>
            <main>
                <div className='search-box'>
                    <input type='text' 
                    className='search-bar'
                    placeholder='Search ...' 
                    onChange={e => setQuery(e.target.value)}
                    onKeyPress={search}
                    />

                    
                </div>

            </main>
        </div>
    );
}

export default Weather;
