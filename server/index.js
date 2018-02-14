var express = require('express');
var data = require('../database/data.js');
var bodyParser = require('body-parser');
var database = require('../database/index.js');
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

//handle get requests to groceries
app.get('/groceries', function(req, res){
  database.selectAll((err, results) => {
    if(err) {
      console.log('errrrrrrr hitting the database');
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  })
})

//handle post requests to groceries
app.post('/groceries', function(req, res){
  //update data object with new object from my req.body
  let quantity    = req.body.quantity;
  let description = req.body.description;
  //send the updated data object back

  if(!description) {
    res.sendStatus(400);
  } else {
    database.insertOne(description, quantity, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).json(results);
      }
    });
  }

});

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});
