
const persona = {
    "name": "Fanel",
    "surname": "Pop",
    "age": 30,
}
// Lo primero es importar el modulo de promises.
let fs = require("fs/promises");

// guardamos el objeto JSON en formato string.
fs.writeFile("./node2.json", JSON.stringify(persona))

    .then(() => {
        return fs.readFile("./node2.json", "utf-8")
        console.log(JSON.parse(persona));
    })
    .then(data => {
        console.log(JSON.parse(data))
    })
    .catch(err => {
        console.log(err);
    })
