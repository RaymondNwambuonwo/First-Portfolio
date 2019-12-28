import React, { Component } from "react";
import "./Contact.css";
import { Icon } from "antd";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h2 className="Contact-header"> Contact Me</h2>

        <p className="Contact-email">RaymondNwambuonwo@gmail.com</p>
        <a
          href="mailto:RaymondNwambuonwo@gmail.com"
          title="click to email me"
          rel="noopener noreferrer"
          className="Contact-icon-link"
        >
          <span>
            <Icon type="mail" theme="twoTone" />
          </span>
        </a>
        <p className="Contact-phone">Phone: (347)-748-3900</p>
      </div>
    );
  }
}

export default Contact;
