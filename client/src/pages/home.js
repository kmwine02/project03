import React from "react";
import SnowFlakes from "../components/Snow";
import { NavLink } from "react-router-dom";
import SnowGlobe from "../images/200.gif"
import Button from "react-bootstrap/Button";
import "../components/css/home.css";

export default function HomePage() {
  return (
    <>
      <SnowFlakes />
      <div className="homeContainer">
          <h1>Welcome to the Christmas Movie Workshop!</h1>
          <div className="snowGlobe">
            <img src={SnowGlobe}/>
          </div>
          <NavLink to="/login"><Button className="homeButton" variant="success" size="lg">Get Started!</Button>{' '}</NavLink>
      </div>
    </>
  );
}
