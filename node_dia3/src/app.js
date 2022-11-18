const express = require("express")
const cors = require("cors")
const profesionalRouters = require("../../node_2/src/routers/Professionals.routers")
const errorHandLing = require('./error/errorHandling')
const app = express();

app.set("port", process.env.PORT || 3500)

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(function(req, res, next){
    res.status(404).json({error:true,
                          codigo: 404,
                          message: "endpoint doesnt found"})
})

app.use(errorHandLing);

app.listen(3500);


module.exports = app;