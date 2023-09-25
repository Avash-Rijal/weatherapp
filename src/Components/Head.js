import { useState } from "react";
import logo from "./Images/logo.svg";

const Head = (props) => {
  const [locationName, setLocationName] = useState("");
  const [setFahrenheit, setSetFahrenheit] = useState(true); // Use useState for setFahrenheit

  const handleInput = (e) => {
    e.preventDefault();
    props.locationInput(locationName);
  };

  const handleSwitch = () => {
    console.log(setFahrenheit);
    setSetFahrenheit(!setFahrenheit); // Use setState to update setFahrenheit
    props.fahrenheitSwitch(setFahrenheit);
  };

  return (
    <div className="head">
      <div className="logo">
        <img src={logo} alt="logo" width="50px" height="50px"></img>
        <p>WeatherCheck</p>
      </div>
      <div className="searchBox">
        <form>
          <input
            type="text"
            placeholder="Enter Location"
            onChange={(e) => setLocationName(e.target.value)}
          ></input>
          <button className="searchButton" type="submit" onClick={handleInput}>
            Search
          </button>
        </form>
      </div>
      <div style={{ fontSize: "larger", fontWeight: "bolder" }}>
        <p>°C | °F</p>
        <label className="switch">
          <input
            type="checkbox"
            checked={!setFahrenheit}
            onChange={handleSwitch}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Head;
