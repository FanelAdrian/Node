const persona = {
    "name": "",
    "surname": "",
    "age": "",
}

let readline = require('readline');
let fs = require("fs/promise");

// rl.question('What is your name? ', (name) => {
//     console.log(`Oh, so your name is ${name}`)
//     persona.name = name;
//     rl.question('What is your surname? ', (surname) => {
//         console.log(`Oh, so your surname is ${surname}`)
//         persona.surname = surname;
//         rl.question('What is your age? ', (age) => {
//             console.log(`Oh, so your age is ${age}`)
//             persona.age = age;
//             rl.close();
//             fs.writeFile("./node3.json", JSON.stringify(persona), (error) => {
//                 fs.readFile("./node3.json", "utf-8", (error, persona) => {
//                     console.log(JSON.parse(persona));
//                 })
//             })
//         })
//     })
// });

const pregunta = (pregunta) => {
    const question = new Promise((resolve, reject) => {
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        })
    })
    return question;
}

pregunta('What is your name?')
    .then((name) => {
        persona.name = name;
        //console.log(`Oh, so your name is ${name}`)
        return pregunta('What is your name?')
    })
    .then((username) => {
        persona.username = username;
        //console.log(`Oh, so your surname is ${surname}`)
        return pregunta('What is your username?')
    })

    .then((age) => {
       persona.age = age;
        //console.log(`Oh, so your age is ${age}`)
        return fs.writeFile("./node3.json", JSON.stringify(persona))
    })

    .then(() => {
        return fs.readFile("./node3.json","utf-8")
    })
    .then((data) => {
        console.log(JSON.parse(data))

    })
    .catch((err) => {
        console.log(err);
    })