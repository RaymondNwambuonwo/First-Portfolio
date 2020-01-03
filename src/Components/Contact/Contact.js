import React, { Component } from "react";
import "./Contact.css";
import { Icon } from "antd";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="Contact">
          <h2 className="Contact-header"> Contact </h2>

          <p className="Contact-email">Email: RaymondNwambuonwo@gmail.com</p>
          <a
            href="mailto:RaymondNwambuonwo@gmail.com"
            title="click to email me"
            rel="noopener noreferrer"
            className="Contact-icon-link"
          >
            <div>
              <Icon type="mail" theme="twoTone" />
            </div>
          </a>
          <p className="Contact-phone">Mobile Phone: (347)-748-3900</p>
        </div>
      </div>
    );
  }
}

export default Contact;
