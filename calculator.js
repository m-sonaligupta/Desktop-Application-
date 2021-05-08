const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// To parse the behind process on server to get the output
app.use(bodyParser.urlencoded({extended: true}));

// Calculator
app.get("/", function(req, res){
res.sendFile(__dirname +"/index.html");
});
app.post("/", function(req, res){
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2;
  res.send("The result is : " +result);
});

// BMICalculator
app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname +"/bmiCalculator.html");
});
app.post("/bmicalculator", function(req, res){
  var personHeight =  Number(req.body.height);
  var personWeight =  Number(req.body.weight);
  var personBMI = Math.round(personWeight / (personHeight * personHeight));
  res.send("Your BMI score is : " +personBMI);
});

// Server listen function
app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
