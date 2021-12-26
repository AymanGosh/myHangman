import Letter from "./Letter";
import React, { Component } from "react";

class Solution extends Component {
  render() {
    let myWord = this.props.solution.word.split("");

    return (
      <div>
        {myWord.map((w) =>
          this.props.letterStatus[w] ? (
            <Letter letter={w} key={w} />
          ) : (
            <Letter key={w} letter="_ " />
          )
        )}
        <div>
          <em>{this.props.solution.hint} </em>
        </div>
      </div>
    );
  }
}
export default Solution;
