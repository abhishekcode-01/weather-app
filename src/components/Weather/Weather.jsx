import React from 'react'
import './Weather.css'
import search_icon from '../../assets/search.png'
import cloud_icon from '../../assets/cloud.png'
import humidity_icon from '../../assets/humidity.png'
import wind_icon from '../../assets/wind.png'

const Weather = () => {
    return (
        <div className='weather'>
            <div className='search-bar'>
                <input type='text' placeholder='Search'></input>
                <img src={search_icon}></img>
            </div>
            <img src={cloud_icon} className='weather-icon' />
            <p className='location'>16°c</p>
            <p className='temperature'>London</p>
            <div className='weather-data'>
                <div className='col'>
                    <img src={humidity_icon} />
                    <div>
                        <p>79°C</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className='col'>
                    <img src={wind_icon} />
                    <div>
                        <p>2.5km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Weather