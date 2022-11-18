
const persona = {
    "name": "Fanel",
    "surname": "Pop",
    "age": 30,
}

let fs = require("fs/promises");


fs.writeFile("./node_promise.json", JSON.stringify(persona))

    .then(() => {
        return fs.readFile("./node_promise.json", "utf-8")
    })
    .then(persona => {
        console.log(JSON.parse(persona))
    })
    .catch(err => {
        console.log(err);
    })
