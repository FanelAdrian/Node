let fs = require("fs");


<<<<<<< HEAD
const writeAndRead = (path,obg) => {
    fs.writeFile(path, JSON.stringify(obg), (any) => {
        fs.readFile(path, "utf-8", (any, obg) => {
            console.log(JSON.parse(obg));
=======
const writeAndRead = (path,obj) => {
    fs.writeFile(path, JSON.stringify(obj), (any) => {
        fs.readFile(path, "utf-8", (any, obj) => {
            console.log(JSON.parse(obj));
>>>>>>> dia3
        })
    });
};

// writeAndRead("./miFichero.json", {calle: "Teruel", numero: 8});

module.exports = {writeAndRead};