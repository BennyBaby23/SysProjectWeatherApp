import React from 'react'
import{UilArrowUp,UilArrowDown,UilTemperature,UilTear,UilWind,UilSun,UilSunset,}from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../services/WeatherFetch'

function TemperatureDetails({weather:{
    details,icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone
}}, items) {
  return (
    <div>
        
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            <p>{details}</p>
            <img src={iconUrlFromCode(items.icon)} alt="" className="w-50"/>
        </div>
     
      

        <div className=" flex flex-row items-center justify-between text-white py-3">

        
      

        <img src={iconUrlFromCode(icon)} alt="" className="w-50"/>
            <p className="text-5xl items-center justify-center py-6">{`${temp.toFixed()}°`}</p>

        

            <div className="flex flex-col space-y-5 text-white py-2">
                <div className="flex font-semibold text-sm items-center justify-center">
                    <UilTemperature size={18} className="mr-1"/>
                    Real fell:
                    <span className="font-semibold ml-1">{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className="flex font-semibold text-sm items-center justify-center">
                    <UilTear size={18} className="mr-1"/>
                    Humidity:
                    <span className="font-semibold ml-1">{`${humidity}%`}</span>
                </div>
                <div className="flex font-semibold text-sm items-center justify-center">
                    <UilWind size={18} className="mr-1"/>
                    Wind:
                    <span className="font-semibold ml-1">{`${speed} KM/H`}</span>
                </div>

            </div>
        </div>

        <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
           <UilSun />
           <p className="font-light">Rise: <span className="font-medium ml-1">{formatToLocalTime(sunrise, timezone,'hh:mma')}</span></p>
           <p className="font-light">|</p>

           <UilSunset />
           <p className="font-light">Set: <span className="font-medium ml-1">{formatToLocalTime(sunset, timezone,'hh:mm a')}</span></p>
           <p className="font-light">|</p>

           <UilArrowUp />
           <p className="font-light">High: <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span></p>
           <p className="font-light">|</p>

           <UilArrowDown />
           <p className="font-light">Low: <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span></p>
          
        </div>
    </div>
  )
}

export default TemperatureDetails