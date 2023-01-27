import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureDetails from './components/TemperatureDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/WeatherFetch';
import { useEffect, useState } from 'react';

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







  return (
   <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-black to-blue-700 h-fit shadow-xl shadow-grey-400 ">
   <TopButtons />
   <Inputs />

   {weather && (
    <div>
     <TimeAndLocation weather={weather} /> 
     <TemperatureDetails weather={weather} /> 
     <Forecast title={"Hourly Forecast"} /> 
     <Forecast title={"DAILY Forecast"} /> 
     </div>
     
   )}
   </div>
  );
}

export default App;
