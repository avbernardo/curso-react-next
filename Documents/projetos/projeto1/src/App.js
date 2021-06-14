import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = { name: "André", counter: 0 };

  handlePClick = () => {
    this.setState({ name: "André massa" });
  };

  handleAClick = (event) => {
    const { counter } = this.state;
    event.preventDefault();
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { name, counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {" "}
            {name} {counter}{" "}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
