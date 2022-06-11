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

    // const keyboard = new Keyboard({
    //     onKeyPress: key => this.handleKeyDown({key: key})
    // })
  }
  // onChange = event => {
  //     const currentValue = event.target.value;
  //     const newValue = currentValue.charAt(currentValue.length - 1);
  //     this.setState({keyShown: newValue});
  //     console.log('onChange', event.target);
  // }
  // handleKeyDown  = event => {
  //     const newKey = event.key;
  //     socket.keyboardSend({key: newKey});
  // }
  onChange = (input) => {
    const newValue = input.charAt(input.length - 1);
    // this.setState({keyShown: newValue});
    this.setState({ input: newValue });
    console.log("Input changed", newValue);
  };

  onKeyPress = (key) => {
    console.log("Button pressed", key);
    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (key === "{shift}" || key === "{lock}") this.handleShift();
    socket.keyboardSend({key: key});
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
      <div>
        <input
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
        {/* <label color='white'>
                Keyboard:
                <input type="text" value={this.state.keyShown} onChange={this.onChange} onKeyDown={this.handleKeyDown} />
            </label> */}
      </div>
    );
  }
}

export default KeyboardField;
