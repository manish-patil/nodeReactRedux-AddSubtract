var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.post("/add", (req, res) => {
    console.log("add called on server.");
    res.send({ "result": req.body.currentResult + req.body.numberToAdd});
})

app.post("/subtract", (req, res) => {
    console.log("subtract called on server.");
    res.send({ "result": req.body.currentResult - req.body.numberToSubtract });
})

app.listen(3000, () => {
    console.log("Server listening at port 3000.")
});