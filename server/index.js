var express = require('express');
var data = require('../database/data.js');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

//handle get requests to groceries
app.get('/groceries', function(req, res){
  res.status(200).json(data);
})

//handle post requests to groceries
app.post('/groceries', function(req, res){
  //update data object with new object from my req.body
  data.groceryList.push({description: req.body.description, quantity: req.body.quantity});
  //send the updated data object back
  res.status(200).json(data);
});

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});
