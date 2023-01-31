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







  return (
   <div className="mx-auto min-w-screen-md mt-5 py-5 px-32 header-shadow h-fit ">
   <TopButtons />
   <Inputs />



   {weather && (
    <div>
     <TimeAndLocation weather={weather} /> 
     <TemperatureDetails weather={weather} /> 
     <AI /> 
     <Forecast title={"Hourly Forecast"} /> 
     <Forecast title={"DAILY Forecast"} /> 
     </div>
     
   )}
   </div>
  );
}

export default App;
