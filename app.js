const express = require("express")
var app = express()
var port = process.env.PORT || 3000 //always take port number from herouku env

app.get("/", function(req, res){
    res.send("Welcome pages")
})

app.get("/about", function(req, res){
    res.send("About us page")
})

app.get("/contact", function(req, res){
    res.send("Contact page")
})

app.listen(port, function(err){
    console.log("server started at port ", port)
})