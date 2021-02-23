import React from "react";

const SearchResult = ({weather}) => {
  return (
    <div>
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

export default SearchResult;
