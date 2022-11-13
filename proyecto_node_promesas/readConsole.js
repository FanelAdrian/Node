//importamos los modulos
const readline = require('readline');


const question = (pregunta) => {
    // resolve y reject son dos funciones que sirven para resolver y rechazar las promesas
    // cuando se llama a la funcion resolve el parametro que le pasamos es el mismo que tiene then al ejecutar la promise.
    // y el reject seria el mismo parametro que tendria el catch.
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            // en este caso readline.createInterface se pasan los parametros como objetos.
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            rl.close();
            resolve(respuesta);

        });
    });
    return question;
}

const readConsoleThen = (callback) => {
    let persona = {};

    question('What is your name?')
        .then((name) => {
            persona.name = name;
            //console.log(`Oh, so your name is ${name}`)
            return question('What is your surname?')
        })
        .then((surname) => {
            persona.surname = surname;
            //console.log(`Oh, so your surname is ${surname}`)
            return question('What is your age?')
        })
        .then((age) => {
            persona.age = age;
            //console.log(`Oh, so your age is ${age}`)
            return callback(persona);
        })
        .catch((err) => {
            console.log(err);
        })
}

// readConsoleThen(console.log) 
//try y escribo toda la logica a ejecurar, y el catch sirve en caso de haber un error.
const readConsoleAsync = async (callback) => {
    try {
        let persona = {};
        let questionName = await question('What is your name?')
        persona.name = questionName;
        let questionSurname = await question('What is your surname?')
        persona.surname = questionSurname;
        let questionAge = await question('What is your age?')
        persona.age = questionAge;
        await callback(persona);
    } catch (err) {
        console.log(err);
    }
}

// readConsoleAsync(console.log)

module.exports = { readConsoleThen, readConsoleAsync };