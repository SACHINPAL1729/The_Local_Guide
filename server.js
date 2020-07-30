// Require section
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

// Calling section
const app = express();

// use and set
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.urlencoded({extended:true}));

// server request
app.listen(8080,function(){
  console.log("Port 8080 initaited!");
});

// Route ROOT
app.get("/",function(req,res){
  res.render("index");
});
