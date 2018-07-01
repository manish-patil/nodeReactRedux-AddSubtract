var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.post("/add", (req, res) => {
    res.send({ "result": req.body.currentResult + req.body.numberToAdd });
})

app.post("/subtract", (req, res) => {
    res.send({ "result": req.body.currentResult - req.body.numberToSubtract });
})

app.listen(3000);