import React from "react";
import { useSelector } from "react-redux";
import {
  FaWind,
  FaTint,
  FaTemperatureHigh,
} from "react-icons/fa";

const CurrentWeather = () => {
  const { current, loading } = useSelector(
    (state) => state.weatherReducer
  );

  if (loading) {
    return (
      <div className="flex justify-center mt-10">
        <span className="loading loading-spinner loading-lg text-white"></span>
      </div>
    );
  }

  if (!current) return null;

  return (
    <div className="flex justify-center mt-10 px-4">

      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 text-white border border-white/20">

        <div className="text-center">

          <h1 className="text-4xl font-bold">
            {current.name}
          </h1>

          <p className="mt-2 text-xl">
            {current.weather[0].main}
          </p>

          <img
            className="mx-auto w-28"
            src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
            alt="weather"
          />

          <h2 className="text-6xl font-bold">
            {(current.main.temp - 273.15).toFixed(1)}°
          </h2>

        </div>

        <div className="grid grid-cols-3 gap-5 mt-8">

          <div className="text-center">

            <FaTemperatureHigh
              size={28}
              className="mx-auto mb-2"
            />

            <p className="text-sm">Feels Like</p>

            <h3 className="font-bold mt-1">
              {(current.main.feels_like - 273.15).toFixed(1)}°
            </h3>

          </div>

          <div className="text-center">

            <FaTint
              size={28}
              className="mx-auto mb-2"
            />

            <p className="text-sm">Humidity</p>

            <h3 className="font-bold mt-1">
              {current.main.humidity}%
            </h3>

          </div>

          <div className="text-center">

            <FaWind
              size={28}
              className="mx-auto mb-2"
            />

            <p className="text-sm">Wind</p>

            <h3 className="font-bold mt-1">
              {current.wind.speed} m/s
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CurrentWeather;