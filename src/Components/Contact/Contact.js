import React, { Component } from "react";
import "./Contact.css";
import { Icon } from "antd";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h2 className="Contact-header"> Contact Me</h2>

        <h2 className="Contact-email">RaymondNwambuonwo@gmail.com</h2>
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
        <h2 className="Contact-phone">Phone: (347)-748-3900</h2>
      </div>
    );
  }
}

export default Contact;
