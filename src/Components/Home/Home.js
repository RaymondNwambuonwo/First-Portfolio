import React, { Component } from "react";
import "./Home.css";
import Ray from "../Images/RayRay.png";
import Footer from "../Footer/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="Homecontainer">
          <h2 className="titlename">Raymond Nwambuonwo</h2>
          <figure className="fig">
            <img className="profilepic" src={Ray} alt="" />
          </figure>
          <h5 className="titlename">Software Engineer</h5>
          <p className="homesum">
            Software Engineer with a background in secondary and higher
            education. My aptitude for learning and applying new concepts led me
            to General Assembly where I was thoroughly immersed in the field of
            programming. I am proficient in Javascript and acquired front-end
            skills in CSS, HTML, React.js and back-end skills in
            MongoDB/Mongoose, Node.js, Express, PostgreSQL, Django, Python. I
            was able to work in a community with peers who continue to push me
            to become a well-rounded software engineer. I am continuously
            looking to build upon my knowledge and skillset to improve as a
            software engineer.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
