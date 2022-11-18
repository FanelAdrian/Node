
const persona = {
    "name": "Fanel",
    "surname": "Pop",
    "age": 30,
}
// Lo primero es importar el modulo.
let fs = require("fs");
// guardamos el objeto JSON en formato string.
//callback es una funcion que se ejecuta cuando se termine el metodo al que llamemos
//le pasamos al metodo writefile parametro error 

fs.writeFile("./node2.json", JSON.stringify(persona), (error) => {
    fs.readFile("./node2.json", "utf-8", (err, persona) => {

        //la funcion redfile me devuelve dos parametros, el de error y el texto escrito en el archivo
        //realizamos un consol log del texto escrito convertido en JSON con la funcion .parse.

        console.log(JSON.parse(persona));
    })
});

