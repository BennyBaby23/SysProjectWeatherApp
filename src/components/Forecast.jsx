import React from 'react'
import { iconUrlFromCode } from '../services/WeatherFetch';

function Forecast({title, items}) {
  return (
    <div>

        <div className="flex items-center justify-start mt-6">
            <p className="text-white font-medium uppercase">{title}</p>
        </div>
        <hr className="my-3" />

        <div className="flex flex-row items-center justify-between text-white">
            {items.map(item => (

                <div className="flex flex-col items-center">
                <p className="font-light text-lg">
                    {item.title}
                </p>
                {/* //imgae put */}
                <img src={iconUrlFromCode(item.icon)} className="w-10000 my-10000" alt="" />
                <p className="font-small">{`${item.temp.toFixed()}°`}</p>
                </div>

            ))}


           


           
        </div>
    </div>
  );
}

export default Forecast;