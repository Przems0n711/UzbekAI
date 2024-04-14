import "./Weather.scss";
import { Oval } from "react-loader-spinner";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import LanguageContext from "../../contexts/LanguageContext";

const Weather = () => {
  const { t } = useContext(LanguageContext);
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });

  useEffect(() => {
    const searchWeather = async () => {
      setWeather({ ...weather, loading: true });
      const url = "https://api.openweathermap.org/data/2.5/weather";
      const api_key = "f00c38e0279b7bc85480c3fe775d518c";
      await axios
        .get(url, {
          params: {
            q: "Tashkent",
            units: "metric",
            appid: api_key,
          },
        })
        .then((res) => setWeather({ data: res.data, loading: false, error: false }))
        .catch(() => setWeather({ ...weather, data: {}, error: true }));
    };
    searchWeather();
  }, []);

  return (
    <div className="Weather">
      {weather.loading && (
        <>
          <br />
          <br />
          <Oval type="Oval" color="black" height={100} width={100} />
        </>
      )}
      {weather.error && (
        <>
          <br />
          <br />
          <span className="error-message">
            <FontAwesomeIcon icon={faFrown} />
            <span style={{ fontSize: "20px" }}>City not found</span>
          </span>
        </>
      )}
      {weather && weather.data && weather.data.main && (
        <div>
          <div className="city-name">
            <h2>
              {weather.data.name}
            </h2>
          </div>
          <div className="icon-temp">
            <img
              className=""
              src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
              alt={weather.data.weather[0].description}
            />
            {Math.round(weather.data.main.temp)}
            <sup className="deg">°C</sup>
          </div>
          <div className="des-wind">
            {/* <p>{weather.data.weather[0].description.toUpperCase()}</p>
            */} <p>{t("few_clouds").toUpperCase()}</p>
            
            <p>{t("wind_speed")}: {weather.data.wind.speed}m/s</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
