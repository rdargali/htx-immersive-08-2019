import React, { Component } from "react";

export default class Page extends Component {
  render() {
    return <h3>This is the {this.props.name} page</h3>;
  }
}
