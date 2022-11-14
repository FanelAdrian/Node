let fs = require("fs");


const writeAndRead = (path,obj) => {
    fs.writeFile(path, JSON.stringify(obj), (any) => {
        fs.readFile(path, "utf-8", (any, obj) => {
            console.log(JSON.parse(obj));
        })
    });
};

// writeAndRead("./miFichero.json", {calle: "Teruel", numero: 8});

module.exports = {writeAndRead};