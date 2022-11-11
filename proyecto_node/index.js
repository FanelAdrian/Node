const { readConsole } = require("./readConsole.js");
const { writeAndRead } = require("./writeAndReadObject.js");


// const callAllFunction = (path, obj, callback) => {
//     readConsole(callback);
//     writeAndRead(path, obj);
// }

// callAllFunction("persona.json", {}, console.log);

readConsole(function (persona){

    writeAndRead("./persona.json",persona);

});