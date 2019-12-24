import React, { Component } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import Resu from "../Images/Resume.pdf";
import "./Resume.css";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1
    };
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };
  render() {
    let scaleNum = 0.1;
    const { pageNumber } = this.state;
    return (
      <div className="resumecontainer">
        <Document
          scale={scaleNum}
          height={100}
          file={Resu}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} scale={0.8} />
        </Document>
      </div>
    );
  }
}
export default Resume;
