import Letter from "./Letter";
import React, { Component } from "react";

class Letters extends Component {
  selectLetter = (letter) => {
    this.props.selectLetter(letter);
  };

  render() {
    return (
      <div>
        {Object.keys(this.props.letterStatus).map((l) =>
          this.props.letterStatus[l] ? (
            <Letter
              letter={l}
              key={l}
              className="selected"
              selectLetter={this.selectLetter}
            />
          ) : (
            <Letter
              letter={l}
              key={l}
              className="non-selected"
              selectLetter={this.selectLetter}
            />
          )
        )}
      </div>
    );
  }
}
export default Letters;
