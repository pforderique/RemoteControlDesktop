import React, { Component } from "react";
import socket from "../utils/socket";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

class KeyboardField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutName: "default",
      keyShown: "",
    };
  }

  onChange = (input) => {
    const maxLineLength = 20;
    input = input.slice(input.length - maxLineLength);
    this.setState({ input });
  };

  onKeyPress = (key) => {
    if (key === "{shift}" || key === "{lock}") this.handleShift();
    socket.keyboardSend({ key: key });
  };

  handleShift = () => {
    const layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default",
    });
  };

  onChangeInput = (event) => {
    const input = event.target.value;
    this.setState({ input });
    this.keyboard.setInput(input);
  };

  render() {
    return (
      <>
        <input
          className="KeyboardField-input"
          value={this.state.input}
          placeholder={"Tap on the virtual keyboard to type"}
          onChange={this.onChangeInput}
        />
        <Keyboard
          keyboardRef={(r) => (this.keyboard = r)}
          layoutName={this.state.layoutName}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />
      </>
    );
  }
}

export default KeyboardField;
