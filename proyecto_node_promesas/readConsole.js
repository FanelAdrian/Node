const readline = require('readline');
const fs = require('fs/promises');


const quest = (pregunta) => {
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}

const readConsoleThen = (callback) => {
    let persona = {};

    quest('What is your name?')
        .then((name) => {
            persona.name = name;
            //console.log(`Oh, so your name is ${name}`)
            return quest('What is your surname?')
        })
        .then((surname) => {
            persona.username = surname;
            //console.log(`Oh, so your surname is ${surname}`)
            return quest('What is your age?')
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

async function readConsoleAsync(callback) {
    try {
        let persona = {};
        let questName = await quest('What is your name?')
        persona.name = questName;
        let questSurname = await quest('What is your surname?')
        persona.surname = questSurname;
        let questAge = awaitQuest('What is your age?')
        persona.age = questAge;
        await callback(persona)
    } catch (err) {
        console.log(err);
    }
}

// readConsoleAsync(console.log)

module.exports = { readConsoleThen, readConsoleAsync };