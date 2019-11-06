import React, { Component } from "react";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = { time: new Date(), year: 2019 };
  }

  componentDidMount() {
    this.clockInterval = setInterval(() => {
      this.setState({ time: new Date() });
    });
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    return <>{this.state.time.toLocaleTimeString()}</>;
  }
}
