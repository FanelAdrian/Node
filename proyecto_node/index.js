


const { readConsole } = require("./readConsole.js");
const { writeAndRead } = require("./writeAndReadObject.js");


readConsole(function (persona){

    writeAndRead("./persona.json",persona);

});