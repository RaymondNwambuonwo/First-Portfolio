import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import RayResume from "../Images/Resume.pdf";

class Navy extends Component {
  render() {
    return (
      <div>
        <Navbar className="bord" expand="xl">
          <Nav>
            <Navbar.Brand>
              <Link to="/" className="nav-link">
                Raymond Nwambuonwo
              </Link>
            </Navbar.Brand>
          </Nav>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link to="/About" className="nav-link">
                About
              </Link>
              <Link to="/Projects" className="nav-link">
                Projects
              </Link>
              <a
                href={RayResume}
                target="__blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                Resume
              </a>
              <Link to="/Contact" className="nav-link">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navy;
