import React, { useState } from "react";
import WeatherService from "../../service/weather.service";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  //console.log(query)

  const search = (evt) => {
    if (evt.key === "Enter") {
      const service = new WeatherService();
      service
        .getLocation(query)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(`The WEATHER IS ${weather}`)
        })
        .catch((error) => console.error(error));
    }
  };

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
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search city..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
        <div className="location-box">
          <div className="location">NYC</div>
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
