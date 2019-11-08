import React, { Component } from "react";

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1
    };
  }

  //   // Needs to be bound:
  //   HelloWorld() {
  //     console.log("Hey");
  //   }

  //   // Can stand on its own:
  //   AddNumbers = () => {
  //     this.state.solution = this.state.number1 + this.state.number2;
  //   };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: (this.state.counter += 1)
      });
    }, 1000);
  }

  render() {
    return <>Timer: {this.state.counter}</>;
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
}
