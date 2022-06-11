const Mouse = require('./mouse');
const Keyboard = require('./keyboard');

class Robot {
    constructor() {
        this.mouse = new Mouse();
        this.keyboard = new Keyboard();
    }
}

module.exports = Robot;