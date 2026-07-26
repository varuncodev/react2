import React from "react";
import { useSelector } from "react-redux";

const HourlyForecast = () => {
  const { forecast } = useSelector(
    (state) => state.weatherReducer
  );

  if (!forecast || forecast.length === 0) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto mt-12 px-4">

      <h2 className="text-3xl font-bold text-white mb-6">
        Hourly Forecast
      </h2>

      <div className="flex gap-5 overflow-x-auto pb-3">

        {forecast.slice(0, 8).map((item) => (

          <div
            key={item.dt}
            className="min-w-[130px] bg-white/20 backdrop-blur-xl rounded-3xl p-5 text-center text-white border border-white/20 shadow-lg"
          >

            <h3 className="font-semibold">
              {new Date(item.dt_txt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h3>

            <img
              className="mx-auto w-16"
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt=""
            />

            <h2 className="text-2xl font-bold">
              {(item.main.temp - 273.15).toFixed(1)}°
            </h2>

          </div>

        ))}

      </div>

    </div>
  );
};

export default HourlyForecast;