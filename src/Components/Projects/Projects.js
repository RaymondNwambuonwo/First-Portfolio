import React, { Component } from "react";
import "./Projects.css";
import Card from "react-bootstrap/Card";
import Rolodex from "../Images/Rolodex.gif";
import OTOI from "../Images/OTOI.gif";
import MemoryMatch from "../Images/memory.gif";
import Pong from "../Images/pong.gif";
import StarWars from "../Images/starwars.gif";
import LinkShrink from "../Images/LinkShrink.gif";
import CurrencyConverter from "../Images/CurrencyConverter.gif";
import TypingGame from "../Images/TypingGame.gif";
import Calculator from "../Images/calculator.gif";
import TicTacToe from "../Images/tictactoe.gif";
import CoTripper from "../Images/cotripper.png";
import CompLibrary from "../Images/ComponentLibrary.gif";
import { Modal } from "antd";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "antd/dist/antd.css";

class Projects extends Component {
  state = { visible: false };

  state = {
    modal1Visible: false,
    modal2Visible: false,
    modal3Visible: false,
    modal4Visible: false,
    modal5Visible: false,
    modal6Visible: false,
    modal7Visible: false,
    modal8Visible: false,
    modal9Visible: false,
    modal10Visible: false,
    modal11Visible: false,
    modal12Visible: false,
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

  setModal5Visible(modal5Visible) {
    this.setState({ modal5Visible });
  }

  setModal6Visible(modal6Visible) {
    this.setState({ modal6Visible });
  }

  setModal7Visible(modal7Visible) {
    this.setState({ modal7Visible });
  }

  setModal8Visible(modal8Visible) {
    this.setState({ modal8Visible });
  }

  setModal9Visible(modal9Visible) {
    this.setState({ modal9Visible });
  }

  setModal10Visible(modal10Visible) {
    this.setState({ modal10Visible });
  }

  setModal11Visible(modal11Visible) {
    this.setState({ modal11Visible });
  }

  setModal12Visible(modal12Visible) {
    this.setState({ modal12Visible });
  }

  render() {
    return (
      <div className="decker">
        <Card className="text-center cards p-3" border="light">
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
                variant="light"
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
                    OTOI was developed at General Assembly as a group project
                    consiting of 3 engineers. OTOI is an application that allows
                    you to keep track of information in a central place. You are
                    able to track your skills, agendas, and applications
                    respectively.
                  </p>
                  <h3>Future Development</h3>
                  <p className="paratex">
                    In the future we are looking to add authentication to allow
                    users to make profiles and login to see their specific data.
                    We will also like to make it mobile responsive as well. For
                    now users are able to to do what was mentioned above.
                  </p>
                  <h4>Technologies</h4>
                  <p className="paratex">Express, MongoDB, Node.js, React.</p>
                  <a
                    className="iconic"
                    href="https://github.com/RaymondNwambuonwo/Otoi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </div>
              </Modal>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center cards p-3" border="light">
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
                variant="light"
                onClick={() => this.setModal2Visible(true)}
              >
                More Info
              </Button>
              <Modal
                title="Rolodex"
                centered
                visible={this.state.modal2Visible}
                onOk={() => this.setModal2Visible(false)}
                onCancel={() => this.setModal2Visible(false)}
              >
                <div className="text-center modtex">
                  <h3>Description</h3>
                  <p className="paratex">
                    Rolodex serves as a command-line application that allows you
                    to store newly made contacts by entering information such as
                    their name, date of birth, phone number, and email.
                  </p>
                  <h3>Future Development</h3>
                  <p className="paratex">
                    In the future I am looking to add a graphical user interface
                    (GUI). As of now it can be used in the command line.
                  </p>
                  <h4>Technologies</h4>
                  <p className="paratex">PeeWee, Pyscopg2, Python.</p>
                  <a
                    className="iconic"
                    href="https://github.com/RaymondNwambuonwo/PythonRolodex"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </div>
              </Modal>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center cards p-3" border="light">
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
                variant="light"
                onClick={() => this.setModal3Visible(true)}
              >
                More Info
              </Button>
              <Modal
                title="MemoryMatch"
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
                  <h3>Future Development</h3>
                  <p className="paratex">
                    In the future I am looking to add a menu and more stages
                    with cards that incorporate more things that are associated
                    with coding. For now users can simply play the one stage
                    that is available.
                  </p>
                  <h4>Technologies</h4>
                  <p className="paratex">HTML, CSS, JavaScript.</p>
                  <a
                    className="iconic"
                    href="https://github.com/RaymondNwambuonwo/Memory-Match"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </div>
              </Modal>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center cards p-3" border="light">
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
                variant="light"
                onClick={() => this.setModal4Visible(true)}
              >
                More Info
              </Button>
              <Modal
                title="Pong"
                centered
                visible={this.state.modal4Visible}
                onOk={() => this.setModal4Visible(false)}
                onCancel={() => this.setModal4Visible(false)}
              >
                <div className="text-center modtex">
                  <h3>Description</h3>
                  <p className="paratex">
                    There are a lot of things you can do with Python and
                    building games is one of them. Python Pong is similar to the
                    traditional pong game but was created as a command line
                    application with a graphical user interface.
                  </p>
                  <h3>Future Development</h3>
                  <p className="paratex">
                    In the future I am looking to add an option to play against
                    the computer and to choose colors of paddles and ball.
                  </p>
                  <h4>Technologies</h4>
                  <p className="paratex">Python, Turtle.</p>
                  <a
                    className="iconic"
                    href="https://github.com/RaymondNwambuonwo/PythonPongGame"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </div>
              </Modal>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center cards p-3" border="light">
          <Card.Img className="carder" variant="top" src={CompLibrary} />
          <Card.Body>
            <Button
              variant="link"
              href="https://raymondnwambuonwocomponentlibrary.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Title className="modtex">Component Library</Card.Title>
            </Button>
            <Card.Text>
              <Button
                className="primary modtex"
                variant="light"
                onClick={() => this.setModal5Visible(true)}
              >
                More Info
              </Button>
              <Modal
                title="Component Library"
                centered
                visible={this.state.modal5Visible}
                onOk={() => this.setModal5Visible(false)}
                onCancel={() => this.setModal5Visible(false)}
              >
                <div className="text-center modtex">
                  <h3>Description</h3>
                  <p className="paratex">
                    This is a library made with storybook filled with commonly
                    used components such as buttons, dropdown menus,
                    redeem/vouchers, and many more.
                  </p>
                  <h3>Future Development</h3>
                  <p className="paratex">
                    In the future I am looking to add more components to choose
                    from as this will minimize the need to rebuild things with
                    each app.
                  </p>
                  <h4>Technologies</h4>
                  <p className="paratex">
                    HTML, CSS, JavaScript, React, Storybook.
                  </p>
                  <a
                    className="iconic"
                    href="https://github.com/RaymondNwambuonwo/ComponentLibrary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </div>
              </Modal>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center cards p-3 trip" border="light">
          <Card.Img className="carder" variant="top" src={CoTripper} />
          <Card.Body>
            <Button
              variant="link"
              href="https://github.com/CotripperPlatform/CoTrip"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Title className="modtex">CoTripper</Card.Title>
            </Button>
            <Card.Text>
              <Button
                className="primary modtex"
                variant="light"
                onClick={() => this.setModal6Visible(true)}
              >
                More Info
              </Button>
              <Modal
                title="CoTripper"
                centered
                visible={this.state.modal6Visible}
                onOk={() => this.setModal6Visible(false)}
                onCancel={() => this.setModal6Visible(false)}
              >
                <div className="text-center modtex">
                  <h3>Description</h3>
                  <p className="paratex">
                    CoTripper is an application that facilitates organized group
                    travel experiences for single mothers. My contribution
                    consisted of establishing an icon component library,
                    creating the message inbox, and collaborating on the
                    creation of the new user page. This project consisted of a
                    team of 25 engineers where agile methodologies were used to
                    conduct team stand-ups and manage project road-blocks to
                    meet deadlines.
                  </p>
                  <h4>Technologies</h4>
                  <p className="paratex">
                    Python, Django, PostgreSQL, PeeWee, Storybook, React.
                  </p>
                  <a
                    className="iconic"
                    href="https://github.com/CotripperPlatform/CoTrip"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </div>
              </Modal>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center cards p-3 trip" border="light">
          <Card.Img className="carder" variant="top" src={StarWars} />
          <Card.Body>
            <Button
              variant="link"
              href="https://intergalacticpeople.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Title className="modtex">Intergalactic People</Card.Title>
            </Button>
            <Card.Text>
              <Button
                className="primary modtex"
                variant="light"
                onClick={() => this.setModal7Visible(true)}
              >
                More Info
              </Button>
              <Modal
                title="Intergalactic People"
                centered
                visible={this.state.modal7Visible}
                onOk={() => this.setModal7Visible(false)}
                onCancel={() => this.setModal7Visible(false)}
              >
                <div className="text-center modtex">
                  <h3>Description</h3>
                  <p className="paratex">
                    Intergalactic People is a MERN Stack application with full
                    CRUD functionality that allows a user to create, update, and
                    delete a character.
                  </p>
                  <h4>Technologies</h4>
                  <p className="paratex">
                    MongoDB/Mongoose, Express, React, & NodeJS.
                  </p>
                  <a
                    className="iconic"
                    href="https://github.com/RaymondNwambuonwo/StarWarsMernFrontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </div>
              </Modal>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center cards p-3 trip" border="light">
          <Card.Img className="carder" variant="top" src={Calculator} />
          <Card.Body>
            <Button
              variant="link"
              href="https://raymondnwambuonwo.github.io/JSCalculator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Title className="modtex">Calculator</Card.Title>
            </Button>
            <Card.Text>
              <Button
                className="primary modtex"
                variant="light"
                onClick={() => this.setModal8Visible(true)}
              >
                More Info
              </Button>
              <Modal
                title="Calculator"
                centered
                visible={this.state.modal8Visible}
                onOk={() => this.setModal8Visible(false)}
                onCancel={() => this.setModal8Visible(false)}
              >
                <div className="text-center modtex">
                  <h3>Description</h3>
                  <p className="paratex">
                    This is a web calculator that was created using vanilla
                    JavaScript.
                  </p>
                  <h4>Technologies</h4>
                  <p className="paratex">HTML, CSS, & JavaScript.</p>
                  <a
                    className="iconic"
                    href="https://github.com/RaymondNwambuonwo/JSCalculator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </div>
              </Modal>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center cards p-3 trip" border="light">
          <Card.Img className="carder" variant="top" src={TicTacToe} />
          <Card.Body>
            <Button
              variant="link"
              href="https://raymondnwambuonwo.github.io/Tic-Tac-Toe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Title className="modtex">Tic-Tac-Toe</Card.Title>
            </Button>
            <Card.Text>
              <Button
                className="primary modtex"
                variant="light"
                onClick={() => this.setModal9Visible(true)}
              >
                More Info
              </Button>
              <Modal
                title="TicTacToe"
                centered
                visible={this.state.modal9Visible}
                onOk={() => this.setModal9Visible(false)}
                onCancel={() => this.setModal9Visible(false)}
              >
                <div className="text-center modtex">
                  <h3>Description</h3>
                  <p className="paratex">
                    This is an application built using vanilla JavaScript to
                    imitate the traditional game of TicTacToe.
                  </p>
                  <h3>Future Development</h3>
                  <p className="paratex">
                    In the future I am looking to add more style choices as
                    opposed to colors. I am also looking to add the computer as
                    an option for opponents.
                  </p>
                  <h4>Technologies</h4>
                  <p className="paratex">HTML, CSS, & JavaScript.</p>
                  <a
                    className="iconic"
                    href="https://github.com/RaymondNwambuonwo/Tic-Tac-Toe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </div>
              </Modal>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center cards p-3 trip" border="light">
          <Card.Img className="carder" variant="top" src={LinkShrink} />
          <Card.Body>
            <Button
              variant="link"
              href="https://github.com/RaymondNwambuonwo/Link-Shrink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Title className="modtex">Link Shrink</Card.Title>
            </Button>
            <Card.Text>
              <Button
                className="primary modtex"
                variant="light"
                onClick={() => this.setModal10Visible(true)}
              >
                More Info
              </Button>
              <Modal
                title="Link Shrink"
                centered
                visible={this.state.modal10Visible}
                onOk={() => this.setModal10Visible(false)}
                onCancel={() => this.setModal10Visible(false)}
              >
                <div className="text-center modtex">
                  <h3>Description</h3>
                  <p className="paratex">
                    I wanted to create a backend web application that shortened
                    URL Links. My first time developing an application using
                    only Node, MongoDB, and Express as well as the ShortID & EJS
                    package. The concepts focused on was setting up an express
                    server, dynamic routes, and using MongoDB/mongoose with
                    express.
                  </p>
                  <h3>Future Development</h3>
                  <p className="paratex">
                    In the future I am looking to add a more dynamic style by
                    creating a front end for the application.
                  </p>
                  <h4>Technologies</h4>
                  <p className="paratex">
                    NodeJS, MongoDB/Mongoose, Express, ShortID, & EJS.
                  </p>
                  <a
                    className="iconic"
                    href="https://github.com/RaymondNwambuonwo/Link-Shrink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </div>
              </Modal>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center cards p-3 trip" border="light">
          <Card.Img className="carder" variant="top" src={CurrencyConverter} />
          <Card.Body>
            <Button
              variant="link"
              href="https://github.com/RaymondNwambuonwo/React-Money-Converter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Title className="modtex">CurrencyConverter</Card.Title>
            </Button>
            <Card.Text>
              <Button
                className="primary modtex"
                variant="light"
                onClick={() => this.setModal11Visible(true)}
              >
                More Info
              </Button>
              <Modal
                title="CurrencyConverter"
                centered
                visible={this.state.modal11Visible}
                onOk={() => this.setModal11Visible(false)}
                onCancel={() => this.setModal11Visible(false)}
              >
                <div className="text-center modtex">
                  <h3>Description</h3>
                  <p className="paratex">
                    The purpose of this project was to understand and implement
                    the use of the hooks useState & useEffect, data binding, and
                    utilize and interact with APIs using react. For this simple
                    application, I chose to work with an external API, exchange
                    rates, and create a currency covnerter where the user can
                    convert any currency they select from a drop down menu.
                  </p>
                  <h3>Future Development</h3>
                  <p className="paratex">
                    In the future I am looking to add a more dynamic style by
                    working with a new CSS framework I have not used before.
                  </p>
                  <h4>Technologies</h4>
                  <p className="paratex">React, HTML, & CSS.</p>
                  <a
                    className="iconic"
                    href="https://github.com/RaymondNwambuonwo/React-Money-Converter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </div>
              </Modal>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center cards p-3 trip" border="light">
          <Card.Img className="carder" variant="top" src={TypingGame} />
          <Card.Body>
            <Button
              variant="link"
              href="https://github.com/RaymondNwambuonwo/Typing-Game"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Title className="modtex">TypingGame</Card.Title>
            </Button>
            <Card.Text>
              <Button
                className="primary modtex"
                variant="light"
                onClick={() => this.setModal12Visible(true)}
              >
                More Info
              </Button>
              <Modal
                title="TypingGame"
                centered
                visible={this.state.modal12Visible}
                onOk={() => this.setModal12Visible(false)}
                onCancel={() => this.setModal12Visible(false)}
              >
                <div className="text-center modtex">
                  <h3>Description</h3>
                  <p className="paratex">
                    A vanilla Javascript typing application where you can assess
                    how fast you can type random statements that appear along
                    with a timer to track how long it takes you to type the
                    statement. When you type the statement incorrectly, the
                    characters are highlighted red. When you type characters
                    correctly, the characters are highlighted green. Once
                    statement is typed correctly, another statment will generate
                    for you to type. I wanted to develop a simple application
                    that resembled older typing games and utilized an API to
                    generate random statements, varying in length, that a person
                    can type. This application covers using a thrid party API
                    and async.
                  </p>
                  <h3>Future Development</h3>
                  <p className="paratex">
                    In the future I am looking to make this a full stack
                    application by creating a back-end.
                  </p>
                  <h4>Technologies</h4>
                  <p className="paratex">HTML, CSS, & JavaScript.</p>
                  <a
                    className="iconic"
                    href="https://github.com/RaymondNwambuonwo/Typing-Game"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </div>
              </Modal>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Projects;
