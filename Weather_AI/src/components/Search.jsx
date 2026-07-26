import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearchLocation } from "react-icons/fa";
import { fetchWeather, setCity } from "../store/action/weatherAction";

const Search = () => {
  const dispatch = useDispatch();

  const city = useSelector((state) => state.weatherReducer.city);
  const loading = useSelector((state) => state.weatherReducer.loading);

  const handleInput = (e) => {
    dispatch(setCity(e.target.value));
  };

  const handleSearch = () => {
    if (!city.trim()) return;
    dispatch(fetchWeather(city));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <div className="flex w-full max-w-xl bg-white/20 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-white/30">

        <input
          type="text"
          value={city}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Search any city..."
          className="flex-1 px-6 py-4 bg-transparent outline-none text-white placeholder:text-gray-200 text-lg"
        />

        <button
          onClick={handleSearch}
          disabled={loading}
          className="px-7 bg-blue-600 hover:bg-blue-700 transition duration-300 text-white"
        >
          {loading ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            <FaSearchLocation size={24} />
          )}
        </button>

      </div>
    </div>
  );
};

export default Search;