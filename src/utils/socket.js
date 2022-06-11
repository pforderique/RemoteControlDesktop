import constants from '../constants';
// import constants from '../../constants'; // not allowed.
import openSocket from 'socket.io-client';
const socket = openSocket();

const sockets = {
    mouseMove(payload) {
        socket.emit(constants.MOUSE_MOVE, payload);
    },
    mouseClick(payload) {
        socket.emit(constants.MOUSE_CLICK, payload);
    },
    keyboardSend(payload) {
        socket.emit(constants.KEYBOARD_SEND, payload);
    }
}

export default sockets;

