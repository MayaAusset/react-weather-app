import React, { useState } from "react";
import WeatherService from "../../service/weather.service";
import SearchResult from "./SearchResult";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      const service = new WeatherService();
      service
        .getLocation(city)
        .then((result) => {
          setWeather(result.data);
          setCity("");
        })
        .catch((error) => console.error(`ERROR FROM SEARCH BAR`, error));
    }
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp >= 25 && weather.main.temp < 40
            ? "app hot"
            : weather.main.temp > 16 && weather.main.temp < 25
            ? "app warm"
            : weather.main.temp > 10 && weather.main.temp < 16
            ? "app cold"
            : weather.main.temp < 10
            ? "app verycold"
            : "app"
          : "app"
      }
    >
      <div className="title">
        <p>React Weather App</p>
      </div>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search city..."
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyPress={search}
        />
      </div>
      <div>
        <SearchResult weather={weather} />
      </div>
    </div>
  );
};

export default SearchBar;
