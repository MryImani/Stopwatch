
import React, { Component } from "react";
import "./StopWatch.css"

class Stopwatch extends Component {
  constructor(props) {
    super(props);
     this.state = {
       tick: null,
       totalSeconds: 0,
     };
  }


  incrementCount() {
    this.setState({
      totalSeconds: this.state.totalSeconds + 1,
    });
  }
  getHour() {
    return parseInt(this.state.totalSeconds / 60 / 60) % 24;
  }
  getMin() {
    return parseInt(this.state.totalSeconds / 60) % 60;
  }
  getSecond() {
    return this.state.totalSeconds % 60;
  }
  startCounter = () => {
    clearInterval(this.state.tick);

    this.setState({
      tick: setInterval(() => this.incrementCount(), 1000),
    });
  };

  stopCounter = () => {
    clearInterval(this.state.tick);
    this.setState({
      tick: null,
    });
  };

  resetCounter = () => {
    clearInterval(this.state.tick);
    this.setState({
      totalSeconds: 0,
      tick: null,
    });
  };

  resumeCounter = () => {
    clearInterval(this.state.tick);
    this.setState({
      tick: setInterval(() => this.incrementCount(), 1000),
    });
  };


  render() {
    return (
      <div className="stopWatch">
        <p>
          {this.getHour() < 10 ? "0" + this.getHour() : this.getHour()}:
          {this.getMin() < 10 ? "0" + this.getMin() : this.getMin()}:
          {this.getSecond() < 10 ? "0" + this.getSecond() : this.getSecond()}
        </p>
        <button
          className="start"
          onClick={this.startCounter}
          ref={this.exampeRef}
        >
          Start
        </button>
        <button className="resume" onClick={this.resumeCounter}>
          Resume
        </button>
        <button className="stop" onClick={this.stopCounter}>
          Stop
        </button>
      </div>
    );
  }
}

export default Stopwatch;