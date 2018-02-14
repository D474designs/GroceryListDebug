var mysql = require('mysql');
var password = require('../passwords.js');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: password.mysqlPassword,
  database: "review"
});

var selectAll = function(cb) {
  con.query('SELECT * FROM groceries', (err, results, fields)=> {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

var insertOne = function(description, quantity, cb) {
  con.query('INSERT INTO groceries (description, quantity) VALUES (?, ?)',
    [description, quantity], (err, results, fields) => {
      if(err) {
        cb(err, null);
      } else {
        console.log(results);
        cb(null, results);
      }
    });
};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
