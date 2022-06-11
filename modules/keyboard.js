// const KeyboardController = require('simple-keyboard')
// const sendkeys = require('sendkeys');
const ks = require("node-key-sender");

class Keyboard {
  constructor() {
    // keys known to cause problems with the API
    ks.aggregateKeyboardLayout({
      "<": "shift-@47", // code for '?'
      ">": "shift-@47",
    });
  }

  sendKey(key) {
    if (key.length === 1)
      return ks.sendLetter(key).then(console.log("key sent:", key));

    // convert key from react-simple-keyboard into keyCode that
    // node-key-sender recognizes
    key =
      key === "{bksp}" ? "back_space" : key.toLowerCase().replace(/[{}]/g, "");

    return ks.sendCombination([key]).then(console.log("KeyCode", [key]));
  }
}

module.exports = Keyboard;
