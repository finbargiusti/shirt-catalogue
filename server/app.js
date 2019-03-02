var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
var fs = require("fs");

var infoRouter = require("./routes/info");
var searchRouter = require("./routes/search");

var app = express();

app.use(express.json());

app.use("/info", infoRouter);
app.use("/search", searchRouter);
app.use("/ping", (req, res) => {
  res.send("pong");
});

app.listen(process.env.PORT);
