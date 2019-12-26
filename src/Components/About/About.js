import React, { Component } from "react";
import "./About.css";
import { Modal } from "antd";
import Button from "react-bootstrap/Button";
import "antd/dist/antd.css";

class About extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div className="About">
        <h2 className="About-about-me">About Me</h2>
        <p className="About-paragraph">
          I was a teacher and higher education practioner. I graduated from the
          State University of New York College at Buffalo with an M.S. in Higher
          Education & Student Affairs Administration. Afterwards I went on to be
          an Academic Advisor with the University of Maryland for a year before
          making the decision to pursue a career in software development.
        </p>
        <hr />
        <p className="About-paragraph">
          Although my path to programming is probably atypical, the things that
          I love about coding, the level of creativity and critical thinking
          that it requires, are the same things that drew me to medicine. The
          time I have spent as a medical student has taught me how to work hard
          in a fast-paced, and dynamic environment, how to collaborate with all
          kinds of people and teams, and the value of consistent, efficient, and
          open communication.
        </p>
        <hr />
        <p className="About-paragraph">
          When I'm not coding, I like reading science fiction novels and mixing
          up different DIY skin and hair care products! (My favorite concoction
          thus fair is a flaxseed and Rosemary hair gel).
        </p>
      </div>
    );
  }
}

export default About;
