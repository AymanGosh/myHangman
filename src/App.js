import "./App.css";
import React, { Component } from "react";

import Letters from "./components/Letters";
import Score from "./components/Score";
import Solution from "./components/Solution";
import EndGame from "./components/EndGame";

export class App extends Component {
  constructor() {
    super();
    let letterStatus = this.generateLetterStatuses();
    this.state = {
      score: 100,
      letterStatus: letterStatus,
      word: "CALM",
      isGameDone: false,
      result: "",
    };
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
    let myWord;
    let changeLetterStatus = { ...this.state.letterStatus };

    if (this.state.word.includes(letter)) {
      this.setState({ score: this.state.score + 10 });
    } else {
      this.setState({ score: this.state.score - 20 });
    }
    if (this.state.score <= 0) {
      this.setState({ isGameDone: true, result: "LOSE!" });
    }
    myWord = this.printSolution();
    if (myWord === this.state.word) {
      this.setState({ isGameDone: true, result: "WON!" });
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
        {!this.state.isGameDone ? (
          <div>
            <Score key={1} score={this.state.score} />
            <Solution key={3} printSolution={this.printSolution} />
            <Letters
              key={2}
              letterStatus={this.state.letterStatus}
              clickLetter={this.clickLetter}
            />
          </div>
        ) : (
          <EndGame msg={this.state.result} />
        )}
      </div>
    );
  }
}

export default App;
