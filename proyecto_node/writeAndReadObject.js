let fs = require("fs");


const writeAndRead = (path,obg) => {
    fs.writeFile(path, JSON.stringify(obg), (any) => {
        fs.readFile(path, "utf-8", (any, obg) => {
            console.log(JSON.parse(obg));
        })
    });
};

// writeAndRead("./miFichero.json", {calle: "Teruel", numero: 8});

module.exports = {writeAndRead};