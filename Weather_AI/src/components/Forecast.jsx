import React from "react";
import { useSelector } from "react-redux";

const Forecast = () => {
  const { forecast, loading } = useSelector(
    (state) => state.weatherReducer
  );

  if (loading) {
    return (
      <div className="flex justify-center mt-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!forecast || forecast.length === 0) {
    return null;
  }

  // Pick one forecast around midday for each day
  const dailyForecast = forecast.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="max-w-7xl mx-auto mt-12 px-4">

      <h2 className="text-3xl font-bold text-white mb-6">
        5 Day Forecast
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

        {dailyForecast.map((day) => (

          <div
            key={day.dt}
            className="bg-white/20 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl p-6 text-center text-white"
          >

            <h3 className="text-lg font-bold">
              {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </h3>

            <img
              className="mx-auto w-20"
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="weather"
            />

            <h2 className="text-3xl font-bold">
              {(day.main.temp - 273.15).toFixed(1)}°
            </h2>

            <p className="capitalize mt-2">
              {day.weather[0].description}
            </p>

            <div className="mt-4 text-sm">

              <p>
                Humidity: {day.main.humidity}%
              </p>

              <p>
                Wind: {day.wind.speed} m/s
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Forecast;