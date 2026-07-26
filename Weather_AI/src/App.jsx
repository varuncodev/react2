import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className="min-h-screen">

      <Search />

      <CurrentWeather />

      <HourlyForecast />

      <Forecast />

    </div>
  );
}

export default App;