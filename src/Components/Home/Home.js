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
          {/* <div className="fig"> */}
          <img className="profilepic" src={Ray} alt="" />
          {/* </div> */}
          <h5 className="titlename">Software Engineer</h5>
          <p className="homesum">
            Software Engineer with an M.S. in Higher Education & Student Affairs
            Administration. In my academic endeavours, I was able to work in a
            community with peers who continue to push me to become a
            well-rounded software engineer. I am continuously looking to build
            upon my knowledge and skillset to improve as a software engineer.
          </p>
          <div className="skillcards">
            <i class="devicon-bootstrap-plain-wordmark colored"></i>
            <i class="devicon-css3-plain-wordmark colored"></i>
            <i class="devicon-django-plain colored"></i>
            <i class="devicon-express-original-wordmark colored"></i>
            <i class="devicon-html5-plain-wordmark colored"></i>
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-mongodb-plain-wordmark colored"></i>
            <i class="devicon-nodejs-plain-wordmark colored"></i>
            <i class="devicon-postgresql-plain-wordmark colored"></i>
            <i class="devicon-python-plain-wordmark colored"></i>
            <i class="devicon-react-original-wordmark colored"></i>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
