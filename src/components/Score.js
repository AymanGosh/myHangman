import React, { Component } from "react";

class Score extends Component {
  constructor() {
    super();
  }
  render() {
    return <div>{this.props.score}</div>;
  }
}
export default Score;
