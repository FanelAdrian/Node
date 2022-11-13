let fs = require("fs/promises");


const writeAndReadThen = (path, obj) => {
    fs.writeFile(path, JSON.stringify(obj))
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
// module.exports = { writeAndReadThen };

// writeAndRead("./miFichero.json", {calle: "Teruel", numero: 8});



const  writeAndReadAsync = async(path, obj) => {

        await fs.writeFile(path, JSON.stringify(obj));
        const persona = await fs.readFile(path, "utf8");
        console.log(JSON.parse(persona));

}


// writeAndReadAsync("./miFichero.json", {calle: "Teruel", numero: 8});

module.exports = { writeAndReadAsync };
