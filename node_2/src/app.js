const express = require("express")
const cors = require("cors")
const profesionalRouters = require("./routers/Professional.routers")
const profesionalsRouters = require("./routers/Professionals.routers")
const profesionalsRouter2 = require("./routers/Professionals.routers2")
const errorHandLing = require('./error/errorHandling');
const { callbackify } = require("util");
const app = express();

app.set("port", process.env.PORT || 3500)

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(profesionalRouters);
app.use(profesionalsRouter2);
app.use(profesionalsRouters);
app.use(function(req, res, next){
    res.status(404).json({error:true,
                          codigo: 404,
                          message: "endpoint doesnt found"})
})

app.use(errorHandLing);


module.exports = app;