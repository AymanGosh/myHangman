import "./App.css";
import React, { Component } from "react";

import Letters from "./components/Letters";
import Score from "./components/Score";
import Solution from "./components/Solution";

export class App extends Component {
  generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }

  render() {
    return 4;
  }
}

export default App;
