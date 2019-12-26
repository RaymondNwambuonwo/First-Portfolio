import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navy from "./Components/Navbar/Navy";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

library.add(fab, far, fas);

function App() {
  return (
    <div>
      <Router>
        <Navy />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Resume" component={Resume} />
        <Route path="/Projects" exact component={Projects} />
        <Route path="/Contact" component={Contact} />
        <footer className="footy">
          <div className="contain">
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
        </footer>
      </Router>
    </div>
  );
}

export default App;
