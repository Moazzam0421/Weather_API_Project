import React, { useState } from 'react'
import SearchBox from './SearchBox'
import { InfoBox } from './InfoBox'

export const WeatherApp = () => {
    const [info, setInfo] = useState({
        city: "Delhi",
        feelsLike: 45.05,
        haze: "haze",
        humidity: 53,
        temp: 38.05,
        tempMin: 38.05,
        tempMax: 38.05,
    })

    const updateInfo = (newInfo)=>{
        setInfo(newInfo);
    }

    return (
        <div style={{ fontFamily: 'Roboto', display: 'grid', alignItems: 'center', justifyContent: 'center' }}>
            <h1 className='text-6xl p-4 m-5 font-bold underline text-center'>WeatherApp</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={info}/>
        </div>
    )
}
