import React from 'react'
import { UilSearch, UilUserLocation, UilBug } from '@iconscout/react-unicons'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Inputs({setQuery, units, setUnits}) {
  const[city, setCity] = useState("");


  const searchClick = () => {
    if (city !== '') setQuery({q: city})
  }

  const handleLocationClick = () => {
    
    if(navigator.geolocation){
      const message = city.q ? city.q : 'current location'
      toast.info('Fetching weather for ' + ' ' + message)
      navigator.geolocation.getCurrentPosition((position) =>
      {
        toast.success(`Successfully fetched weather for` + ' ' + message)
     
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({
          lat, lon,
        });
      })
    }
  }
  const handleUnitChange = (e) => {
    const selectedUnit = e.currentTarget.name
    if(units !== selectedUnit) setUnits(selectedUnit);
  }

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };
  
  return (
  <div className="flex flex-row justify-center my-6">

<div className='flex flex-row w-3/4 items-center justify-center space-x-4'>

<input value = {city}
onChange={(e) => setCity(e.currentTarget.value)}
type="text" 

placeholder="Search for place"
className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase" />

<UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={searchClick}/>
<UilUserLocation size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleLocationClick}/>

</div>

<div className="flex flex-row w-1/4 items-center justify-center ">
<button name="metric" className="text-xl text-white font-light transition ease-out hover:scale-110" onClick={handleUnitChange}>°C</button>

<p className="text-xl text-white mx-2">|</p> 

<button name="imperial" className="text-xl text-white font-light transition ease-out hover:scale-110" onClick={handleUnitChange}>°F</button>

</div>
<div className="flex flex-row w-1/4 items-center justify-center ">
<UilBug size={25} className="color-red cursor-pointer transition ease-out hover:scale-125" onClick={() => handleLinkClick('https://docs.google.com/forms/d/e/1FAIpQLSeS7407fe1pTwCadKd282S8FlIZsfRAkiUHimd06Bi9bZgHhw/viewform')}/>
          <button className="color-red cursor-pointer transition ease-out hover:scale-125" onClick={() => handleLinkClick('https://docs.google.com/forms/d/e/1FAIpQLSeS7407fe1pTwCadKd282S8FlIZsfRAkiUHimd06Bi9bZgHhw/viewform')}>Bug Report</button></div>
  </div>

  
  );
}

export default Inputs;