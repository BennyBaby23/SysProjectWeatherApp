import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureDetails from './components/TemperatureDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/WeatherFetch';
import { useEffect, useState } from 'react';
import AI from './components/AI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() { 


   const [query, setQuery] = useState({q: 'barrie'})
  
   const [units, setUnits] = useState('metric')
   const [weather, setWeather] = useState(null)

   useEffect(() => {
    const message = query.q ? query.q : 'current location'
    toast.info('Fetching weather for ' + ' ' + message)



  const fetchWeather = async () => {
    toast.success(`Successfully fetched weather for` + ' ' + message)
  await getFormattedWeatherData({...query, units}).then(data => {
    setWeather(data);
  })
    
  }; 

  fetchWeather();

   }, [query, units]);

  //  changing Background
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
   <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />
   </div>
  );
}

export default App;
