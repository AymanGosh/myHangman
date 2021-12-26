import Letter from "./Letter";
import React, { Component } from "react";

class Letters extends Component {
  constructor() {
    super();
  }
  clickLetter = (letter) => {
    this.props.clickLetter(letter);
  };

  render() {
    return (
      <div>
        {Object.keys(this.props.letterStatus).map((l) => (
          <Letter letter={l} key={l} clickLetter={this.clickLetter} />
        ))}
      </div>
    );
  }
}

export default Letters;
