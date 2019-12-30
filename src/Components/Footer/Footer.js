import React, { Component } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <div className="footy">
        <div className="footydiv">
          <a
            className="iconic"
            href="https://www.linkedin.com/in/raymondnwambuonwo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
          <a
            className="iconic"
            href="https://github.com/RaymondNwambuonwo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a
            className="iconic"
            href="https://medium.com/@raymondnwambuonwo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "medium"]} />
          </a>
        </div>
      </div>
    );
  }
}
export default Footer;
