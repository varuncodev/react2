import {
  FETCH_CURRENT_SUCCESS,
  FETCH_FORECAST_SUCCESS,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_PENDING,
  SET_CITY,
} from "../reducer/contant/weatheerConstant";
import axios from "axios";

const API = import.meta.env.VITE_WEATHER_KEY;

export const fetchWeatherPending = () => {
  return {
    type: FETCH_WEATHER_PENDING,
  };
};
export const fetchCurrentSuccess = (data) => {
  return {
    type: FETCH_CURRENT_SUCCESS,
    payload: data,
  };
};
export const fetchForecastSuccess = (data) => {
  return {
    type: FETCH_FORECAST_SUCCESS,
    payload: data,
  };
};
export const fetchWeatherError = (error) => {
  return {
    type: FETCH_WEATHER_ERROR,
    payload: error,
  };
};
export const setCity = (city) => {
  return {
    type: SET_CITY,
    payload: city,
  };
};

export const fetchWeather = (city) => {
  return async (dispatch) => {

    dispatch(fetchWeatherPending());
    try {
      const current = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`,
      );

      const forecast = await axios(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API}`
      );

      dispatch(fetchCurrentSuccess(current.data));
      dispatch(fetchForecastSuccess(forecast.data.list));
    } catch (error) {
      dispatch(fetchWeatherError("something Wrong"))
    }
  };
};
