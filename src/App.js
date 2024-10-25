import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
      name: "",
      email: "",
      message: "",
      successMessage: ""
    };
  

  onChangemsg = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onClickSubmit = (event) => {
    event.preventDefault();
    this.setState({
      successMessage: "submitted successfully!",
      name: "",
      email: "",
      message: ""
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onClickSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.onChangemsg}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.onChangemsg}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.onChangemsg}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {this.state.successMessage && (
          <p className="success">{this.state.successMessage}</p>
        )}
      </div>
    );
  }
}

export default App;
