let fs = require("fs/promises");


const writeAndReadThen = (path,obg) => {
    fs.writeFile(path, JSON.stringify(obg))
    .then(() => {
        return fs.readFile(path, "utf-8")

    })
    .then(data => {
        console.log(JSON.parse(data));
    })
    .catch(err => {
        console.log(err);
    })

}
module.exports = {writeAndReadThen};

// writeAndRead("./miFichero.json", {calle: "Teruel", numero: 8});

const obg = {
    "name": "Fanel",
    "surname": "Pop",
}

function writeAndReadAsync(path, obj) {

    async function asyncAwait() {
        await fs.writeFile(path, JSON.stringify(obj))
        const persona = await fs.readFile(path, "utf8")
        console.log(JSON.parse(persona));

    }
    asyncAwait()

}

// writeAndReadAsync("./miFichero.json", {calle: "Teruel", numero: 8});

module.exports = { writeAndReadAsync };
