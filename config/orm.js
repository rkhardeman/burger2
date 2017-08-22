
var connection = require("./connection.js");

connection.connect(function(err) {
  if (err) {
    console.error('error: ' + err.stack);
    return;
  };
  console.log('connected as: ' + connection.threadId);
});

var orm = {
    selectAll: function(cb) {
      var query = "SELECT * FROM burgers"
      connection.query(query, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },

    insertOne: function(burger_name, cb) {
      var query = "INSERT INTO burgers SET ?"
      connection.query(query, {
        burger_name: burger_name,
        devoured: false
      }, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },

    updateOne: function(burgerID, cb) {
      var query = "UPDATE burgers SET ? WHERE ?";
      connection.query(query, [ {devoured: true}, {id: burgerID} ], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    }
};

module.exports = orm;