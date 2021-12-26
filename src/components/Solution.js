import Letter from "./Letter";
import React, { Component } from "react";

class Solution extends Component {
  constructor() {
    super();
  }
  printSolution() {
    return this.props.printSolution();
  }
  render() {
    return this.printSolution();
  }
}
export default Solution;
