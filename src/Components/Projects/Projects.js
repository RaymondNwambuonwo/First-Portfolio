import React, { useState } from "react";
import "./Projects.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Rolodex from "../Images/Rolodex.gif";
import OTOI from "../Images/OTOI.gif";
import MemoryMatch from "../Images/memory.gif";
import Pong from "../Images/pong.gif";
import Modal from "react-bootstrap/Modal";
// import ModalBody from "react-bootstrap/ModalBody";
// import ModalHeader from "react-bootstrap/ModalHeader";
// import ModalFooter from "react-bootstrap/ModalFooter";
// import ModalTitle from "react-bootstrap/ModalTitle";
import Button from "react-bootstrap/Button";

function Projects() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="decker">
      <CardDeck>
        <Card className="text-center" border="primary">
          <Card.Img className="carder" variant="top" src={OTOI} />
          <Card.Body>
            <Card.Title>OTOI</Card.Title>
            <Card.Text>
              <Button variant="primary" size="sm" active onClick={handleShow}>
                More Info
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title">ffffff</Modal.Title>
                </Modal.Header>
                <Modal.Body>sdfdfsrff</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center cards" border="primary">
          <Card.Img className="carder" variant="top" src={Rolodex} />
          <Card.Body>
            <Card.Title>Rolodex</Card.Title>
            <Card.Text>
              <Button variant="primary" size="sm" active onClick={handleShow}>
                More Info
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center cards" border="primary">
          <Card.Img className="carder" variant="top" src={MemoryMatch} />
          <Card.Body>
            <Card.Title>Memory Match</Card.Title>
            <Card.Text>
              <Button variant="primary" size="sm" active onClick={handleShow}>
                More Info
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center cards" border="primary">
          <Card.Img className="carder" variant="top" src={Pong} />
          <Card.Body>
            <Card.Title>Pong</Card.Title>
            <Card.Text>
              <Button variant="primary" size="sm" active onClick={handleShow}>
                More Info
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
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
