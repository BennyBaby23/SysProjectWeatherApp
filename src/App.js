import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureDetails from './components/TemperatureDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/WeatherFetch';

function App() { 

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({q: 'london'});
    console.log(data);

  };

  fetchWeather();





  return (
   <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-black to-blue-700 h-fit shadow-xl shadow-grey-400 ">
   <TopButtons />
   <Inputs />
   <TimeAndLocation /> 
   <TemperatureDetails /> 
   <Forecast title={"Hourly Forecast"} /> 
   <Forecast title={"DAILY Forecast"} /> 
   </div>
  );
}

export default App;
