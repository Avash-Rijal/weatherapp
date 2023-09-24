import cloud from "./Images/cloud.svg";
import sunny from "./Images/sunny.svg";
import rain from "./Images/rain.svg";

const BottomContent = (props) => {
  let imageSource = "";
  if (props.data.chance_of_rain > 0 && props.data.chance_of_rain < 50) {
    imageSource = cloud;
  } else if (props.data.chance_of_rain >= 50) {
    imageSource = rain;
  } else if (props.data.chance_of_rain === 0) {
    imageSource = sunny;
  }
  return (
    <div className="bottomContentList">
      <div className="forecastList">
        <div className="forecastElement">{props.data.time.split(" ")[1]}</div>
        <div className="forecastElement">
          <p>{props.data.chance_of_rain}%</p>
          <img src={imageSource} alt="weather"></img>
        </div>
        <div className="forecastElement">{props.data.humidity}%</div>
        <div className="forecastElement">{props.data.temp_c}°</div>
      </div>
    </div>
  );
};

export default BottomContent;
