// const KeyboardController = require('simple-keyboard')
// const sendkeys = require('sendkeys');
const ks = require('node-key-sender');

class Keyboard {
    constructor() {
        ks.aggregateKeyboardLayout({
            '<': 'shift-@47', // code for '?'
            '>': 'shift-@47', 
        });
    }

    sendKey(key) {
        if (key.length === 1) {
            ks.sendLetter(key).then(console.log('key sent:', key));
        } else {
            key = key === 'Backspace' ? 'back_space' : key.toLowerCase().replace(' ', '_');
            ks.sendCombination([key]).then(console.log('HEY! Sent', [key]));
        }
    }
}

module.exports = Keyboard;