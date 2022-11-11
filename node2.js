
const persona = {
    "name": "Fanel",
    "surname": "Pop",
    "age": 30,
}

let fs = require("fs");
fs.writeFile("./node2.json", JSON.stringify(persona), (error) => {
    fs.readFile("./node2.json", "utf-8", (err, persona) => {
        console.log(JSON.parse(persona));
    })
});

