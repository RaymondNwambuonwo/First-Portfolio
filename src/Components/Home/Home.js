import React, { Component } from "react";
import "./Home.css";
import Ray from "../Images/RayRay.png";
import Footer from "../Footer/Footer";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            education. I was able to work in a community with peers who continue
            to push me to become a well-rounded software engineer. I am
            continuously looking to build upon my knowledge and skillset to
            improve as a software engineer.
          </p>
          {/* <h5 className="titlename">Skills</h5> */}
          {/* <div className="skillset">
            <i class="devicon-bootstrap-plain-wordmark colored"></i>
            <i class="devicon-css3-plain-wordmark colored"></i>
            <i class="devicon-django-plain colored"></i>
            <i class="devicon-git-plain-wordmark colored"></i>
            <i class="devicon-html5-plain-wordmark colored"></i>
          </div> */}
        </div>
      </div>
    );
  }
}
export default Home;
