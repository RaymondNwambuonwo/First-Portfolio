import React, { Component } from "react";
import "./About.css";
import Footer from "../Footer/Footer";
import Image from "react-bootstrap/Image";
import Figure from "react-bootstrap/Figure";
import Ray from "../Images/RayRay.png";

class About extends Component {
  render() {
    return (
      <div className="About">
        <h2 className="About-about-me">About Me</h2>
        <p className="About-paragraph">
          My time before software development consisted of being a teacher, as I
          taught elementary and junior high school. I wanted to focus more on
          adult learning which prompted my decision to attend graduate school. I
          graduated from the State University of New York College at Buffalo
          with an M.S. in Higher Education & Student Affairs Administration in
          2018. Upon graduating, I went on to be an Academic Advisor with the
          University of Maryland for a year, thereafter making the decision to
          pursue a career in software development.
        </p>

        <hr />

        <p className="About-paragraph">
          My interest in programming was not traditional like that of schooling,
          but of pure curiosity. Initially I did some research on the field of
          programming and the first thing that peaked my interest was how you
          can implement something you learned immediately and see results. I
          find programming to be nothing short of exciting, as you are able to
          bring thoughts and ideas to life in this virtual world located in the
          devices we use daily.
        </p>
        <hr />
        <h2 className="About-about-me">My Interest</h2>
        <p className="About-paragraph">
          Outside of coding there are many things I enjoy doing such as
          traveling, poetry, music, outdoor activities, spending time with
          friends & family, and watching movies.
        </p>
        <Footer />
      </div>
    );
  }
}

export default About;
