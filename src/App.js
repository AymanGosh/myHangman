import "./App.css";
import React, { Component } from "react";

import Letters from "./components/Letters";
import Score from "./components/Score";
import Solution from "./components/Solution";

export class App extends Component {
  constructor() {
    super();
    let letterStatus = this.generateLetterStatuses();
    this.state = { score: 100, letterStatus: letterStatus, word: "CALM" };
  }
  printSolution = () => {
    let myWord = "";
    for (let letter of this.state.word) {
      if (this.state.letterStatus[letter] === true) {
        myWord += letter;
      } else {
        myWord += "_ ";
      }
    }
    return myWord;
  };
  clickLetter = (letter) => {
    let changeLetterStatus = { ...this.state.letterStatus };

    if (this.state.word.includes(letter)) {
      this.setState({ score: this.state.score + 10 });
    } else {
      this.setState({ score: this.state.score - 20 });
    }

    changeLetterStatus[letter] = true;
    this.setState({ letterStatus: changeLetterStatus });
  };
  generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }

  render() {
    return (
      <div>
        <Score key={1} score={this.state.score} />
        <Solution key={3} printSolution={this.printSolution} />
        <Letters
          key={2}
          letterStatus={this.state.letterStatus}
          clickLetter={this.clickLetter}
        />
      </div>
    );
  }
}

export default App;
