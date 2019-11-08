import React, { Component } from "react";

export default class Alarm extends Component {
  constructor() {
    super();
    this.state = {
      counter: 100
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: (this.state.counter -= 1)
      });
    }, 1000);
  }

  render() {
    return <>Alarm: {this.state.counter}</>;
  }
}
