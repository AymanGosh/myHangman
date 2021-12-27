import React, { Component } from "react";

class Letter extends Component {
  constructor() {
    super();
  }
  clickLetter = () => {
    this.props.clickLetter(this.props.letter);
  };
  render() {
    return (
      <span className={this.props.className} onClick={this.clickLetter}>
        {this.props.letter}
      </span>
    );
  }
}

export default Letter;
