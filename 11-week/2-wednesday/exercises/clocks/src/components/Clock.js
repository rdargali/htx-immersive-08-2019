import React, { Component } from "react";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.clockInterval = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    return <>{this.state.time.toLocaleTimeString()}</>;
  }
}
