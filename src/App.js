import { useState } from "react";
import Head from "./Components/Head";
import MidContent from "./Components/MidContent";
import BottomContent from "./Components/BottomContent";

function App() {
  const [feelsLike, setFeelsLike] = useState("");
  const [humidity, setHumidity] = useState("");
  const [chanceofRain, setChanceofRain] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [temperature, setTempreature] = useState("");
  const [weather, setWeather] = useState("");
  const [dayNight, setDayNight] = useState("");
  const [cityName, setCityName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [todayLow, setTodayLow] = useState("");
  const [todayHigh, setTodayHigh] = useState("");
  const [sunRise, setSunRise] = useState("");
  const [sunSet, setSunSet] = useState("");
  const [precipitation, setPrecipitation] = useState("");
  const [pressure, setPressure] = useState("");
  const [visibility, setVisibility] = useState("");
  const [uvindex, setUvindex] = useState("");

  const [hourlyForecastReport, setHourlyForcastReport] = useState([]);

  const [inputLocation, setInputLocation] = useState("london");

  const locationInput = (locationName) => {
    setInputLocation(locationName);
  };

  if (inputLocation) {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=51e8d6bc0ca54636bdc92134230108&q=${inputLocation}&days=1&aqi=no&alerts=no`,
      { mode: "cors" }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setFeelsLike(response.current.feelslike_c);
        setHumidity(response.current.humidity);
        setChanceofRain(
          response.forecast.forecastday[0].day.daily_chance_of_rain
        );
        setWindSpeed(response.current.wind_kph);
        setTempreature(response.current.temp_c);
        setWeather(response.current.condition.text);
        setDayNight(response.current.is_day);
        setCityName(response.location.name);
        setDateTime(response.location.localtime);
        setTodayLow(response.forecast.forecastday[0].day.mintemp_c);
        setTodayHigh(response.forecast.forecastday[0].day.maxtemp_c);
        setSunRise(response.forecast.forecastday[0].astro.sunrise);
        setSunSet(response.forecast.forecastday[0].astro.sunset);
        setUvindex(response.forecast.forecastday[0].day.uv);
        setVisibility(response.current.vis_km);
        setPressure(response.current.pressure_mb);
        setPrecipitation(response.current.precip_mm);
        setHourlyForcastReport(response.forecast.forecastday[0].hour);
      })
      .catch(function (err) {
        alert("Invalid Location " + err);
      });
  }
  const weatherUpdateObject = {
    feelsLike,
    humidity,
    chanceofRain,
    windSpeed,
    temperature,
    weather,
    dayNight,
    cityName,
    dateTime,
    todayLow,
    todayHigh,
    sunRise,
    sunSet,
    precipitation,
    pressure,
    visibility,
    uvindex,
  };

  return (
    <div className="container">
      <Head locationInput={locationInput}></Head>
      <MidContent weatherUpdates={weatherUpdateObject}></MidContent>
      <div className="bottomContent">
        <div className="titleHead">
          <p>TIME</p>
          <p>CHANCE OF RAIN</p>
          <p>HUMIDITY</p>
          <p>TEMPERATURE</p>
        </div>
        {hourlyForecastReport.map((data) => (
          <BottomContent data={data}></BottomContent>
        ))}
        <p></p>
      </div>
    </div>
  );
}

export default App;
