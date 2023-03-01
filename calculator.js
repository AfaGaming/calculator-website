const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function (req, res) {
    res.send("This page is no longer available.");
});

app.post("/", function (req, res) {
    var firstNumber = parseFloat(req.body.num1);
    var secondNumber = parseFloat(req.body.num2);
    var operationRequested = req.body.operation;
    var answer;

    switch (operationRequested) {
        case "add":
            answer = firstNumber + secondNumber;
            break;
        case "subtract":
            answer = firstNumber - secondNumber;
            break;
        case "multiply":
            answer = firstNumber * secondNumber;
            break;
        case "devide":
            answer = firstNumber / secondNumber;
            break;
        default:
            answer = "Undefined operation! The options are: add, subtract, multiply and devide. Please keep it all lower case.";
            break;
    }

    res.send("Answer = " + answer);
});

app.listen(3000, function () {
    console.log("Server is online!");
});
