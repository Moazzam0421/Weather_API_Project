import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';


export default function SearchBox({ updateInfo }) {

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_Key = "3c5d56d6ecf15e30a907aa1727f6f08a";

    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        setCity(e.target.value)
    };

    const getWeather = async () => {
        try {
            let res = await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`);
            let jsonResp = await res.json();
            console.log(jsonResp)
            let result = {
                city: city,
                feelsLike: jsonResp.main.feels_like,
                humidity: jsonResp.main.humidity,
                temp: jsonResp.main.temp,
                tempMin: jsonResp.main.temp_min,
                tempMax: jsonResp.main.temp_max,
                haze: jsonResp.weather[0].description
            }
            console.log(result);
            return result;
        } catch (err) {
           throw err;
        }
    }

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            console.log(city)
            setCity("");
            let newInfo = await getWeather();
            updateInfo(newInfo);
        }catch(err){
        setError(true);
        }
        
    }

    return (
            <form onSubmit={handleSubmit} className='m-5 flex items-center content-around'>
                <TextField className='flex items-center content-around text-black' id="city" onChange={handleInputChange} label="City Name" value={city} variant="outlined" required />
                <Button type="submit" variant="outlined">Submit</Button>
            {error && <p style={{color: 'red'}}>Invalid Search</p>}
            </form>
    );
}
