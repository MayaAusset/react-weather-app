import React, { useState } from "react";
import WeatherService from "../../service/weather.service";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      const service = new WeatherService();
      console.log(`city is ${city}`)
      service
        .getLocation(city)
        .then((result) => {
          setCity("");
          setWeather(result.data);
          console.log(`The WEATHER IS ${result.data}`);
        })
        .catch((error) => console.error(`ERROR FROM SEARCH BAR`, error));
    }
  };

/*   const testService = () => {
    const service = new WeatherService();
      service
        .getTest()
        .then((result) => {
          console.log(`YOU PRESSED THE BUTTON : ${result}`);
        })
        .catch((error) => console.error(`ERROR FROM SEARCH BAR after YOU PRESSED THE BUTTON`, error));
    }
   */

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="app">
    {/* <div>
      <button onClick={testService}>
        TEST SERVICE
      </button>
    </div> */}
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search city..."
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyPress={search}
        />
        <div className="location-box">
          <div className="location">{weather.name}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">15 degrees</div>
          <div className="weather">Sunny</div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
