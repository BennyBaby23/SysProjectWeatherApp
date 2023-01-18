import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureDetails from './components/TemperatureDetails';

function App() {
  return (
   <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-black to-blue-700 h-fit shadow-xl shadow-grey-400">
   <TopButtons />
   <Inputs />
   <TimeAndLocation /> 
   <TemperatureDetails /> 
   </div>
  );
}

export default App;
