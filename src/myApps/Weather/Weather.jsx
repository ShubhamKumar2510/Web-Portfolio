import React, { useState } from "react";
import { fetchWeather } from "./Featchweather";
import styles from "./Weather.css";

function dashboardHandler(props) {
  console.log(props);
}

const WeatherReport = ({ navigation }) => {
  console.log(navigation);

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery("");
    }
  };

  return (
    <React.Fragment>
      <div className="container-main">
        <div
          onClick={dashboardHandler}
          style={{ marginLeft: "30px", cursor: "pointer" }}
        >
          <h3 className="logo">{/* DASH<span>Board</span> */}</h3>
        </div>
        <input
          type="text"
          className="search"
          placeholder="Enter the city name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
        {weather.main && (
          <div className="city">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className="info">
              <img
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default WeatherReport;
