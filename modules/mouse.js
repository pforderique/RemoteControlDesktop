
const {getCursorPosition, setCursorPosition, sendCursorEvent, cursorEvents} = require("node-cursor");

// Must match what is sent 
class MouseButton {
    static LEFT = 'left';
    static RIGHT = 'right';
    static WHEEL = 'wheel';
}

class Mouse {
    getPos() {
        return getCursorPosition();
    }

    setPos(x, y) {
        setCursorPosition({x: x, y: y});
        return this;
    }

    moveCursorBy(dx, dy) {
        const {x: currX, y: currY} = this.getPos();
        return this.setPos(currX + dx, currY + dy);
    }

    click(button, double = false) {
        if (double) this.press(button).release(button);
        return this.press(button).release(button);
    }

    press(button) {
        const currentPosition = this.getPos();
        let mouseEvent;

        switch (button) {
            case MouseButton.LEFT:
                mouseEvent = cursorEvents.LEFT_DOWN;
                break;
            case MouseButton.RIGHT:
                mouseEvent = cursorEvents.RIGHT_DOWN;
                break;
            case MouseButton.WHEEL:
                mouseEvent = cursorEvents.MIDDLE_DOWN;
                break;
            default:
                throw Error(`Button ${button} not supported.`);
        }
        
        // press button
        sendCursorEvent({
            event: mouseEvent,
            data: 0,
            x: currentPosition.x,
            y: currentPosition.y
        });

        return this;
    }

    release(button) {
        const currentPosition = this.getPos();
        let mouseEvent;

        switch (button) {
            case MouseButton.LEFT:
                mouseEvent = cursorEvents.LEFT_UP;
                break;
            case MouseButton.RIGHT:
                mouseEvent = cursorEvents.RIGHT_UP;
                break;
            case MouseButton.WHEEL:
                mouseEvent = cursorEvents.MIDDLE_UP;
                break;
            default:
                throw Error(`Button ${button} not supported.`);
        }
        
        // press button
        sendCursorEvent({
            event: mouseEvent,
            data: 0,
            x: currentPosition.x,
            y: currentPosition.y
        });    

        return this;
    }
    
    scroll(amount) {
        sendCursorEvent({
            event: cursorEvents.WHEEL,
            data: amount,
            x: 0,
            y: 0
        });
        return this;
    }
}

module.exports = Mouse;