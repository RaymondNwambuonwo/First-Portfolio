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
              <Button
                variant="link"
                href="https://mern-group-app-frontend.mustafawhassan.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Title className="modtex">OTOI</Card.Title>
              </Button>
              <Card.Text>
                <Button
                  className="primary modtex"
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
                    <h3>Description</h3>
                    <p className="paratex">
                      OTOI is an application that allows you to keep track of
                      information in a central place. You are able to track your
                      skills, agendas, and applications respectively.
                    </p>
                    <h4>Technologies</h4>
                    <p className="paratex">Express, MongoDB, Node.js, React.</p>
                  </div>
                </Modal>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-center cards" border="primary">
            <Card.Img className="carder" variant="top" src={Rolodex} />
            <Card.Body>
              <Button
                variant="link"
                href="https://github.com/RaymondNwambuonwo/PythonRolodex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Title className="modtex">Rolodex</Card.Title>
              </Button>
              <Card.Text>
                <Button
                  className="primary modtex"
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
                    <h3>Description</h3>
                    <p className="paratex">
                      Rolodex serves as a command-line application that allows
                      you to store newly made contacts by entering information
                      such as their name, date of birth, phone number, and
                      email.
                    </p>
                    <h4>Technologies</h4>
                    <p className="paratex">PeeWee, Pyscopg2, Python.</p>
                  </div>
                </Modal>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-center cards" border="primary">
            <Card.Img className="carder" variant="top" src={MemoryMatch} />
            <Card.Body>
              <Button
                variant="link"
                href="https://memory-matching.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Title className="modtex">Memory Match</Card.Title>
              </Button>
              <Card.Text>
                <Button
                  className="primary modtex"
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
                    <h3>Description</h3>
                    <p className="paratex">
                      Memory Match takes on a new meaning to matching similar
                      cards as the player gets to match different computer
                      languages and frameworks. Made with the developer in mind,
                      have a bit of fun matching up some popular languages and
                      frameworks!
                    </p>

                    <h4>Technologies</h4>
                    <p className="paratex">HTML, CSS, JavaScript.</p>
                  </div>
                </Modal>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-center cards" border="primary">
            <Card.Img className="carder" variant="top" src={Pong} />
            <Card.Body>
              <Button
                variant="link"
                href="https://github.com/RaymondNwambuonwo/PythonPongGame"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Title className="modtex">Pong</Card.Title>
              </Button>
              <Card.Text>
                <Button
                  className="primary modtex"
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
                    <h3>Description</h3>
                    <p className="paratex">
                      There are a lot of things you can do with Python and
                      building games is one of them. Python Pong is similar to
                      the traditional pong game but was created as a command
                      line application with a graphical user interface.
                    </p>
                    <h4>Technologies</h4>
                    <p className="paratex">Python, Turtle.</p>
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
