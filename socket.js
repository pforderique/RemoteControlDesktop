const constants = require('./constants');

function handleSocketEvents(socket, robot) {
    socket.on(constants.MOUSE_MOVE, ({x, y, scroll}) => {
        if(!scroll) {
            robot.mouse.moveCursorBy(x, y);
            console.log(`[MobileController]: mouse moved by ${x},${y}`)
        }else {
            const scrollDist = 10;
            y = y > 0 ? scrollDist : -scrollDist;
            robot.mouse.scroll(y);
            console.log(`[MobileController]: scrolled by ${y}`)
        }
    });

    socket.on(constants.MOUSE_CLICK, ({ button, double }) => {
        console.log('[MobileController]: mouse clicked', button)
        robot.mouse.click(button, double);
    })

    socket.on(constants.KEYBOARD_SEND, ({ key }) => {
        console.log('[MobileController]: key sent', key)
        robot.keyboard.sendKey(key);
    })
}

module.exports = handleSocketEvents;