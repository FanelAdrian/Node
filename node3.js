const persona = {
    "name": "",
    "surname": "",
    "age": "",
}
//importamos readline y requiere
// https://sebhastian.com/javascript-readline/
let readline = require('readline');
let fs = require("fs");
//creamos una interfaz y le solicitamos un imput y output
let rl = readline.createInterface(
    process.stdin, process.stdout);

rl.question('What is your name? ', (name) => {
    console.log(`Oh, so your name is ${name}`)
    persona.name = name;
    rl.question('What is your surname? ', (surname) => {
        console.log(`Oh, so your surname is ${surname}`)
        persona.surname = surname;
        rl.question('What is your age? ', (age) => {
            console.log(`Oh, so your age is ${age}`)
            persona.age = age;
            rl.close();
            fs.writeFile("./node3.json", JSON.stringify(persona), (error) => {
                fs.readFile("./node3.json", "utf-8", (error, persona) => {
                    console.log(JSON.parse(persona));
                })
            })
        })
    })
});
