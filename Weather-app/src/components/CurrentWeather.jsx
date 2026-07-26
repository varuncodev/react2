import React from "react";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const { current, loading} = useSelector(
    (state) => state.weatherReducer
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!current) {
    return <h2>Search a city first.</h2>;
  }

  return (
    <div className="card bg-neutral text-neutral-content w-96">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{current.name}</h2>
        <p>Temperature: {(current.main.temp - 273.15).toFixed(1)} °C</p>
        <p>Humidity: {current.main.humidity}%</p>
        <p>Weather: {current.weather[0].description}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;