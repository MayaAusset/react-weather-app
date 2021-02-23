import React, { useState } from "react";
import WeatherService from "../../service/weather.service";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  console.log(weather.data);

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
    <div className="app">
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
      {typeof weather.main != "undefined" ? (
        <div>
          <div className="location-box">
            <div className="location">
              {weather.name}, {weather.sys.country}
            </div>
          </div>
          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)}°C</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
      ) : (
        " "
      )}
     
    </div>
  );
};

export default SearchBar;
