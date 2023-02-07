import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureDetails from './components/TemperatureDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/WeatherFetch';
import { useEffect, useState } from 'react';
import AI from './components/AI';

function App() { 


   const [query, setQuery] = useState({q: 'barrie'})
  
   const [units, setUnits] = useState('metric')
   const [weather, setWeather] = useState(null)

   useEffect(() => {

  const fetchWeather = async () => {
  await getFormattedWeatherData({...query, units}).then(data => {
    setWeather(data);
  })
    
  }; 

  fetchWeather();

   }, [query, units]);

   const formatBackground = () => {
    if(!weather) return 'header-shadow'
    const threshold = units === 'metric' ? 20 : 60
    if(weather.temp < threshold) return 'header-shadow2'

    return 'header-shadow3'
   }


  return (
   <div className={`mx-auto min-w-screen-md mt-5 py-5 px-32 header-shadow h-fit ${formatBackground()}`}>
   <TopButtons setQuery= {setQuery}/>
   <Inputs setQuery= {setQuery} units={units} setUnits={setUnits}/>

   {weather && (
    <div>
     <TimeAndLocation weather={weather} /> 
     <TemperatureDetails weather={weather} /> 
     <AI /> 
     <Forecast title="Hourly Forecast" items={weather.hourly} /> 
     <Forecast title="DAILY Forecast" items={weather.daily} /> 
     </div>
    
   )}
   </div>
  );
}

export default App;
