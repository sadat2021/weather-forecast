import { ToastContainer } from 'react-toastify';
import WeatherInfoContextProvider from './contexts/WeatherInfoContext';
import { HomePage } from './pages';

function App() {
  return (
    <WeatherInfoContextProvider>
      <HomePage />
      <ToastContainer />
    </WeatherInfoContextProvider>
  );
}

export default App;
