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
      <div>
        <h1 className="text-center">About Me</h1>
        <div></div>

        <div></div>

        <div></div>
      </div>
    );
  }
}

export default About;
