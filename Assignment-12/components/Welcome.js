import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Aditya" };
  }

  render() {
    return <h1>Welcome, {this.state.name}!</h1>;
  }
}

export default Welcome;
