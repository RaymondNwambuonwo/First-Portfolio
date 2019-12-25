import React, { useState } from "react";
import "./Projects.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Rolodex from "../Images/Rolodex.gif";
import OTOI from "../Images/OTOI.gif";
import MemoryMatch from "../Images/memory.gif";
import Pong from "../Images/pong.gif";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="decker">
      <CardDeck>
        <Card className="text-center cards" border="info">
          <Card.Img className="carder" variant="top" src={OTOI} />
          <Card.Body>
            <Card.Title>OTOI</Card.Title>
            <Card.Text>
              <Button variant="primary" size="sm" active onClick={showModal}>
                More Info
              </Button>
              <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                  <Modal.Title>Hi</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                  <Button className="bg-primary" size="sm" onClick={hideModal}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center">
          <Card.Img className="carder" variant="top" src={Rolodex} />
          <Card.Body>
            <Card.Title>Rolodex</Card.Title>
            <Card.Text>
              <Button variant="info" size="sm" active onClick={showModal}>
                More Info
              </Button>
              <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                  <Modal.Title>Hi</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                  <button onClick={hideModal}>Close</button>
                </Modal.Footer>
              </Modal>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center">
          <Card.Img className="carder" variant="top" src={MemoryMatch} />
          <Card.Body>
            <Card.Title>Memory Match</Card.Title>
            <Card.Text>
              <Button variant="info" size="sm" active onClick={showModal}>
                More Info
              </Button>
              <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                  <Modal.Title>Hi</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                  <button onClick={hideModal}>Close</button>
                </Modal.Footer>
              </Modal>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center">
          <Card.Img className="carder" variant="top" src={Pong} />
          <Card.Body>
            <Card.Title>Pong</Card.Title>
            <Card.Text>
              <Button variant="info" size="sm" active onClick={showModal}>
                More Info
              </Button>
              <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                  <Modal.Title>Hi</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                  <button onClick={hideModal}>Close</button>
                </Modal.Footer>
              </Modal>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}

export default Projects;
