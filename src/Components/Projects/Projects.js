import React, { Component } from "react";
import "./Projects.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Rolodex from "../Images/Rolodex.gif";
import OTOI from "../Images/OTOI.gif";
import MemoryMatch from "../Images/memory.gif";
import Pong from "../Images/pong.gif";
import Modal from "react-bootstrap/Modal";

class Projects extends Component {
  render() {
    return (
      <div className="decker">
        <CardDeck>
          <Card>
            <Card.Img className="carder" variant="top" src={OTOI} />
            <Card.Body>
              <Card.Title>OTOI</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img className="carder" variant="top" src={Rolodex} />
            <Card.Body>
              <Card.Title>Rolodex</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img className="carder" variant="top" src={MemoryMatch} />
            <Card.Body>
              <Card.Title>Memory Match</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img className="carder" variant="top" src={Pong} />
            <Card.Body>
              <Card.Title>Pong</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Projects;
