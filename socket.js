const constants = require('./constants');
const logger = require('./utils/logger')

function handleSocketEvents(socket, robot) {
    socket.on(constants.MOUSE_MOVE, ({x, y, scroll}) => {
        if(!scroll) {
            robot.mouse.moveCursorBy(x, y);
            logger(`mouse moved by ${x},${y}`);
        }else {
            const scrollDist = 10;
            y = y > 0 ? scrollDist : -scrollDist;
            robot.mouse.scroll(y);
            logger(`scrolled by ${y}`);
        }
    });

    socket.on(constants.MOUSE_CLICK, ({ button, double }) => {
        logger("mouse clicked", button);
        robot.mouse.click(button, double);
    })

    socket.on(constants.KEYBOARD_SEND, ({ key }) => {
        logger("key sent", key);
        robot.keyboard.sendKey(key);
    })
}

module.exports = handleSocketEvents;