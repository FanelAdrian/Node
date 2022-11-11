const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

const readConsole = (callback) => {
    let persona = {};

    rl.question('What is your name? ', (name) => {
        persona.name = name;
        rl.question('What is your surname? ', (surname) => {
            persona.surname = surname;
            rl.question('What is your age? ', (age) => {
                persona.age = age;
                rl.close();
                callback(persona);
            })
        })
    })
}


// readConsole(console.log) 

module.exports = { readConsole };