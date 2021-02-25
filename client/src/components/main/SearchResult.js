import React from "react";
import Maps from "./maps/Maps";
import "./SearchResult.css";
import DynamicIcon from "./DynamicIcon";

const SearchResult = ({ weather }) => {
  return (
    <div>
      {typeof weather.main != "undefined" ? (
        <div className="search-result">
          <div className="weather-result">
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div>
              <DynamicIcon weather={weather}/>
              </div>
            </div>
          </div>
          <div className="map-result">
            <Maps props={weather} />
          </div>
        </div>
      ) : (
        <div>
          <p>Enter a valid city name !</p>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
