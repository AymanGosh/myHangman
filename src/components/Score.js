import React, { Component } from "react";

class Score extends Component {
  render() {
    let className;
    if (this.props.score >= 80) {
      className = "high-score";
    } else {
      if (this.props.score > 50 && this.props.score < 80) {
        className = "medium-score";
      } else {
        className = "low-score";
      }
    }
    return (
      <div>
        <div className={className}> {this.props.score} </div>
      </div>
    );
  }
}
export default Score;
