const { readConsoleThen } = require("./readConsole.js");
const { writeAndReadThen } = require("./writeAndReadObject.js");

const { readConsoleAsync } = require("./readConsole.js");
const { writeAndReadAsync } = require("./writeAndReadObject.js");

// writeAndReadAsync("./persona.json", "hola") 

// readConsoleAsync((persona) => writeAndReadAsync("./persona.json", persona) );


// readConsoleThen()
// .then(obj=>{
//     writeAndReadThen('./prueba',obj)
// })
// .catch(err=>{console.log(err)})



const consoleAsync = async () => {
    try {
        const obj = await readConsoleAsync()
        await writeAndReadAsync("./awaitPrueba", obj);
    } catch (err) {
        console.log(err)
    }
}

consoleAsync()

