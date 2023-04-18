import React, { useState, useEffect } from 'react';
import { UilBrain } from '@iconscout/react-unicons';
import 'react-toastify/dist/ReactToastify.css';
function AI({weather:{
    details,icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone
}}, items) {


  function hasRain(details) {
    return (details.toLowerCase().indexOf('rain') !== -1 ? 'true' : 'false');
  }
  
  function hasSnow(details) {
    return (details.toLowerCase().indexOf('snow') !== -1 ? 'true' : 'false');
  }
  

  const [response, setResponse] = useState('');
  let kph = speed; //speed in kph
  let mph = kph / 1.60934; //convert kph to mph
  let fahrenheit = (temp * 9/5) + 32; //convert temperature from Celsius to Fahrenheit

  useEffect(() => {
    fetch(`https://spectrummenu.com/weatherapp/scripts/AI.php?temp=${fahrenheit}&wind=${mph}&humidity=${humidity}`) //pass fahrenheit value to fetch
      .then(res => res.text())
      .then(data => setResponse(data))
      .catch(err => console.log(err));
      //toast.success(`https://spectrummenu.com/weatherapp/scripts/AI.php?temp=${fahrenheit}&wind=${mph}&humidity=${humidity}`);

  }, [fahrenheit, speed, humidity, timezone]); // dependency array with fahrenheit, speed, humidity, and timezone

  return (
    <div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-lg py-3">
        <UilBrain size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" />
        <h1 className="text-white cursor-pointer transition ease-out hover:scale-125">{response}</h1>
      </div>
    </div>
  );
}

export default AI;
