import React, { Component } from "react";
import "./Home.css";
import Ray from "../Images/RayRay.png";

class Home extends Component {
  render() {
    return (
      <figure className="Raymond">
        <img className="raypic" src={Ray} />
        <figcaption>Software Engineer</figcaption>
        <p className="homesum">As a software engineer it is my </p>
      </figure>
    );
  }
}
export default Home;
