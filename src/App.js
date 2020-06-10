import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import PdfBlobProvider from "./components/PdfBlobProvider";
import invoice from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      pdfId: null
    };
  }

  uuidGenerator = require("uuid/v4");

  handleSubmit = () => {
    this.setState({ count: this.state.count + 1, pdfId: this.uuidGenerator() });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.handleSubmit}>Download</button>
        </header>
        <PdfBlobProvider invoice={invoice} pdfId={this.state.pdfId} />
      </div>
    );
  }
}

export default App;
