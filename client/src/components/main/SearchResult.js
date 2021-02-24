import React from "react";
import Maps from "./maps/Maps";

const SearchResult = ({ weather }) => {
  return (
    <div>
      {typeof weather.main != "undefined" ? (
        <div>
          <div className="weather-result">
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
          <div className="map-result">
            <Maps />
          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default SearchResult;
