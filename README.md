# Remote Control Desktop

## About

A web app that allows you to control your computer (mouse and keyboard) directly from your phone!

## How it works

The app uses sockets to establish a real time connection from your phone/client to the server running on your computer. Dragging one finger accross the screen moves the mouse, and using two lets you scroll (just like a touchpad). Toggle the keyboard button at the top of the app to type on your computer.

## Installation & Set Up

1) git clone this repo or download the zipped folder and unpack
2) open terminal at the root directory of the project and run:
    ```
    npm install
    ```
    to install all the packages necessary to run the project
3) to start the app, run:
    ```
    npm start
    ```
    A url will show on console; put this url into your mobile browser and you can now control your PC from your phone. 

4) to stop the server and web app, simply hit `Ctrl+C` in the console that is 
    running the program.
    
NOTE: Your phone MUST be connected to the same wifi network as your computer

WARNING: Keep these urls private, as anyone else on the same wifi network can use them to control your computer while the server is running!!!

## Future Features & Known Issues

### Features

- Add volume control buttons on the UI
- Upgrade virtual keyboard used to include other keyboard types
- Add programmable "shortcut" buttons that perform specific tasks (like open Netflix)

### Issues

- Has only been tested on a Windows machine. MacOS and Linux systems may require different configurations to work
- Some special characters like `@` or `%` do not always show up when using the virtual keyboard
