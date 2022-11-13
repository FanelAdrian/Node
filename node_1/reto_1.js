const express = require("express");
const app = express();
app.get("/", function (request, response) {
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers["user-agent"]);
    response.status(200).json({ ok: true, message: "Recibido!" });
    response.send("hello from express server!");
    
})




 app.get("/bye", function (request, response) {
    response.status(200).json({ ok: true, message: "adios!" });


 })
app.listen(3000);


