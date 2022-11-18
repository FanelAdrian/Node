<<<<<<< HEAD



=======
>>>>>>> dia3
const { readConsole } = require("./readConsole.js");
const { writeAndRead } = require("./writeAndReadObject.js");


<<<<<<< HEAD
=======
// const callAllFunction = (path, obj, callback) => {
//     readConsole(callback);
//     writeAndRead(path, obj);
// }

// callAllFunction("persona.json", {}, console.log);

>>>>>>> dia3
readConsole(function (persona){

    writeAndRead("./persona.json",persona);

});