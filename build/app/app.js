"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//create a new express application instance
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Hello, World!');
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
