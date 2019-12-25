import React, { Component } from "react";
import "./Projects.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Rolodex from "../Images/Rolodex.gif";
import OTOI from "../Images/OTOI.gif";
import MemoryMatch from "../Images/memory.gif";
import Pong from "../Images/pong.gif";
import { Modal } from "antd";
import Button from "react-bootstrap/Button";
import "antd/dist/antd.css";

class Projects extends Component {
  state = { visible: false };

  state = {
    modal1Visible: false,
    modal2Visible: false,
    modal3Visible: false,
    modal4Visible: false
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  setModal3Visible(modal3Visible) {
    this.setState({ modal3Visible });
  }

  setModal4Visible(modal4Visible) {
    this.setState({ modal4Visible });
  }

  render() {
    return (
      <div className="decker">
        <CardDeck>
          <Card className="text-center cards" border="primary">
            <Card.Img className="carder" variant="top" src={OTOI} />
            <Card.Body>
              <Card.Title>OTOI</Card.Title>
              <Card.Text>
                <Button
                  className="primary"
                  onClick={() => this.setModal1Visible(true)}
                >
                  More Info
                </Button>
                <Modal
                  title="OTOI"
                  centered
                  visible={this.state.modal1Visible}
                  onOk={() => this.setModal1Visible(false)}
                  onCancel={() => this.setModal1Visible(false)}
                >
                  <div className="text-center modtex">
                    <h1>Description</h1>
                    <p>
                      OTOI is an application that allows you to keep track of
                      information and to have it all in a central place. You are
                      able to track your skills, agendas, and applications.
                    </p>
                    <h1>Technologies</h1>
                    <p>Express, MongoDB, Node.js, React.</p>
                  </div>
                </Modal>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-center cards" border="primary">
            <Card.Img className="carder" variant="top" src={Rolodex} />
            <Card.Body>
              <Card.Title>Rolodex</Card.Title>
              <Card.Text>
                <Button
                  className="primary"
                  onClick={() => this.setModal2Visible(true)}
                >
                  More Info
                </Button>
                <Modal
                  title="OTOI"
                  centered
                  visible={this.state.modal2Visible}
                  onOk={() => this.setModal2Visible(false)}
                  onCancel={() => this.setModal2Visible(false)}
                >
                  <div className="text-center modtex">
                    <h4>Description</h4>
                    <p>
                      OTOI is an application that allows you to keep track of
                      information and to have it all in a central place. You are
                      able to track your skills, agendas, and applications.
                    </p>
                    <h5>Technologies</h5>
                    <p>Express, MongoDB, Node.js, React.</p>
                  </div>
                </Modal>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-center cards" border="primary">
            <Card.Img className="carder" variant="top" src={MemoryMatch} />
            <Card.Body>
              <Card.Title>Memory Match</Card.Title>
              <Card.Text>
                <Button
                  className="primary"
                  onClick={() => this.setModal3Visible(true)}
                >
                  More Info
                </Button>
                <Modal
                  title="OTOI"
                  centered
                  visible={this.state.modal3Visible}
                  onOk={() => this.setModal3Visible(false)}
                  onCancel={() => this.setModal3Visible(false)}
                >
                  <div className="text-center modtex">
                    <h4>Description</h4>
                    <p>
                      OTOI is an application that allows you to keep track of
                      information and to have it all in a central place. You are
                      able to track your skills, agendas, and applications.
                    </p>
                    <h5>Technologies</h5>
                    <p>Express, MongoDB, Node.js, React.</p>
                  </div>
                </Modal>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-center cards" border="primary">
            <Card.Img className="carder" variant="top" src={Pong} />
            <Card.Body>
              <Card.Title>Pong</Card.Title>
              <Card.Text>
                <Button
                  className="primary"
                  onClick={() => this.setModal4Visible(true)}
                >
                  More Info
                </Button>
                <Modal
                  title="OTOI"
                  centered
                  visible={this.state.modal4Visible}
                  onOk={() => this.setModal4Visible(false)}
                  onCancel={() => this.setModal4Visible(false)}
                >
                  <div className="text-center modtex">
                    <h4>Description</h4>
                    <p>
                      OTOI is an application that allows you to keep track of
                      information and to have it all in a central place. You are
                      able to track your skills, agendas, and applications.
                    </p>
                    <h5>Technologies</h5>
                    <p>Express, MongoDB, Node.js, React.</p>
                  </div>
                </Modal>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Projects;
