var express = require('express');
var app = express();
const path = require("path");
let port= process.env.PORT || 8000;
const hbs= require("hbs")
//Serving static files
app.use(express.static(path.join(__dirname,"../public")));

//setting view engine
app.set("views",path.join(__dirname,"../templates/views"));
app.set("view engine","hbs");

//Register partials
hbs.registerPartials(path.join(__dirname,"../templates/partials"));
//Routing
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{ 
    res.render("weather");
});
app.get("*",(req,res)=>{
    res.render("error");
})
app.listen(port,()=>{
    console.log(`Your app is running at http://localhost:${port}`)
});