var express=require('express');
var appcontroller = require('./appcontroller');
var app= express();
appcontroller(app);

var port = process.env.PORT ;
app.listen(port ,() => {
console.log("Server is running." +  process.env.PORT)}
);
