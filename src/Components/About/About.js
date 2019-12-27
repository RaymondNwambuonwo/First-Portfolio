import React, { Component } from "react";
import "./About.css";
import { Carousel } from "antd";

class About extends Component {
  render() {
    return (
      <div className="About">
        <h2 className="About-about-me">About Me</h2>
        <p className="About-paragraph">
          My time before software development consisted of being a teacher, as I
          taught elementary and junior high school. In 2016 I decided to attend
          graduate school and in 2018 I graduated from the State University of
          New York College at Buffalo with an M.S. in Higher Education & Student
          Affairs Administration. Upon graduating, I went on to be an Academic
          Advisor with the University of Maryland for a year, thereafter making
          the decision to pursue a career in software development.
        </p>
        <hr />
        <p className="About-paragraph">
          My interest in programming was not traditional in the sense like that
          of schooling, but of pure curiosity. Initially I did some research on
          the field of programming and the first thing that peaked my interest
          was how you can implement something you learned immediately and see
          results. I found programming to be nothing short of exciting, as you
          are able to bring thoughts and ideas to life in this virtual world
          located in the devices we use daily.
        </p>
        <hr />
        <p className="About-paragraph">
          When I am not behind a computer, I am behind a notebook writing poems
          and music. Poetry and music are two passions of mine that take up my
          time outside of the realm of coding.
        </p>
        <Carousel autoplay>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default About;
