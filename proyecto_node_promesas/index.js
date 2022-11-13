const { readConsoleThen } = require("./readConsole.js");
// const { writeAndReadThen } = require("./writeAndReadObject.js");

// const { readConsoleAsync } = require("./readConsole.js");
const { writeAndReadAsync } = require("./writeAndReadObject.js");

// writeAndReadAsync("./persona.json", "hola") 

readConsoleThen((persona) => writeAndReadAsync("./persona.json", persona) );