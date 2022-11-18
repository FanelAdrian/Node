const app = require ("./app")

app.listen(app.get("port"), function (){
    console.log("Serverlusten on port" + app.get("port"));
})