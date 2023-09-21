import sun from "./Images/sun.svg";
import moon from "./Images/moon.svg";
import stars from "./Images/stars.svg";

const MidContent = (props) => {
  return (
    <div className="midContent">
      <div className="dayNight">
        {props.weatherUpdates.dayNight === 1 ? (
          <div className="dayTime">
            <img src={sun} alt="sun" width="200px" height="200px"></img>
          </div>
        ) : (
          <div className="nightTime">
            <img src={moon} alt="moon" width="180px" height="180px"></img>
            <img src={stars} alt="stars" width="40px" height="40px"></img>
          </div>
        )}
      </div>
      <div className="weatherDisplay">
        {" "}
        <h1 className="cityName">{props.weatherUpdates.cityName}</h1>
        <p className="weather">{props.weatherUpdates.weather}</p>
        <p className="temperature">{props.weatherUpdates.temperature}°</p>
        <div className="highLow">
          <p>H:{props.weatherUpdates.todayHigh}°</p>
          <p>L:{props.weatherUpdates.todayLow}°</p>
        </div>
      </div>
      <div className="weatherDetails">
        <div className="weatherDeailsRow1">
          <div className="weatherDetailsBox">
            <p>SUNRISE</p>
            <p className="value">{props.weatherUpdates.sunRise}</p>
          </div>
          <div className="weatherDetailsBox">
            <p>SUNSET</p>
            <p className="value">{props.weatherUpdates.sunSet}</p>
          </div>
          <div className="weatherDetailsBox">
            <p>CHANCE OF RAIN</p>
            <p className="value">{props.weatherUpdates.chanceofRain}%</p>
          </div>
          <div className="weatherDetailsBox">
            <p>HUMIDITY</p>
            <p className="value">{props.weatherUpdates.humidity}%</p>
          </div>
          <div className="weatherDetailsBox">
            <p>WIND SPEED</p>
            <p className="value">{props.weatherUpdates.windSpeed}km/hr</p>
          </div>
        </div>
        <div className="weatherDeailsRow2">
          <div className="weatherDetailsBox">
            <p>Feels Like</p>
            <p className="value">{props.weatherUpdates.feelsLike}°</p>
          </div>
          <div className="weatherDetailsBox">
            <p>PRECIPITATION</p>
            <p className="value">{props.weatherUpdates.precipitation} mm</p>
          </div>
          <div className="weatherDetailsBox">
            <p>PRESSURE</p>
            <p className="value">{props.weatherUpdates.pressure} hPa</p>
          </div>
          <div className="weatherDetailsBox">
            <p>VISIBILITY</p>
            <p className="value">{props.weatherUpdates.visibility} Km</p>
          </div>
          <div className="weatherDetailsBox">
            <p>UV INDEX</p>
            <p className="value">{props.weatherUpdates.uvindex}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidContent;
