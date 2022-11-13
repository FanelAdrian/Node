const persona = {
    "name": "",
    "surname": "",
    "age": "",
}

let readline = require('readline');
let fs = require("fs/promises");
// creo una funcion llamada question con el parametro ppregunta
const question = (pregunta) => {
    // crear una variable en la que almaceno una promesa con el constructor de la clase promesas (new Promise)
    const question = new Promise((resolve, reject) => {
        let rl = readline.createInterface(
            process.stdin, process.stdout);
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        })
    })
    return question;
}

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
        return fs.writeFile("./node3_promesas.json", JSON.stringify(persona))
    })

    .then(() => {
        return fs.readFile("./node3_promesas.json", "utf-8")
    })
    .then((data) => {
        console.log(JSON.parse(data))

    })
    .catch((err) => {
        console.log(err);
    })