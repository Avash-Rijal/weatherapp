import { useState } from "react";
import logo from "./Images/logo.svg";
const Head = (props) => {
  const [locationName, setLocationName] = useState("");
  const handleInput = (e) => {
    e.preventDefault();
    props.locationInput(locationName);
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
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Head;
