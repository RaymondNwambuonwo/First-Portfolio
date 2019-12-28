import React, { Component } from "react";
import "./Home.css";
import Ray from "../Images/RayRay.png";

class Home extends Component {
  render() {
    return (
      <figure className="Raymond">
        <img className="raypic" src={Ray} />
        <figcaption>
          <p className="homesum">
            Software Engineer with a background in secondary and higher
            education. My aptitude for learning and applying new concepts led me
            to General Assembly where I was thoroughly immersed in the field. I
            am proficient in
            <span className="skill"> Javascript </span>
            and acquired front-end skills in
            <span className="skill"> CSS, </span>
            <span className="skill"> HTML, </span> &{" "}
            <span className="skill"> React.js </span>
            and back-end skills in
            <span className="skill"> MongoDB/Mongoose, </span>
            <span className="skill"> Node.js, </span>
            <span className="skill"> Express, </span>
            <span className="skill"> PostgreSQL, </span>
            <span className="skill"> Django, </span>&{" "}
            <span className="skill">Python</span>. I was able to work in a
            community with peers who continue to push me to become a
            well-rounded software engineer. I am continuously looking to build
            upon my knowledge and skillset to improve as a software engineer.
          </p>
        </figcaption>
      </figure>
    );
  }
}
export default Home;
