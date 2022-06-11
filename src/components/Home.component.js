import React, { Component } from "react";
import KeyboardField from "./KeyboardField.component";
import MouseContainer from "./MouseContainer";

import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { showKeyboard: false };

    // This binding is necessary to make `this` work in the callback
    this.toggleKeyboard = this.toggleKeyboard.bind(this);
  }

  toggleKeyboard() {
    this.setState((prevState) => ({
      showKeyboard: !prevState.showKeyboard,
    }));
  }

  render() {
    return (
      <div className="home-container">
        <button className="keyboard-toggle" onClick={this.toggleKeyboard}>
          <img
            width="100"
            height="50"
            alt="keyboard"
            src="/images/key.png"
          ></img>
        </button>
        <MouseContainer retracted={this.state.showKeyboard} />
        {this.state.showKeyboard && <KeyboardField />}
      </div>
    );
  }
}

export default Home;
