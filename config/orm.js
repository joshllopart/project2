
var connection = require("../config/connection.js");

var orm = {

  //select all from a table
  all: function(table, cb) {
    var qString = "SELECT * FROM " + table + ";";
    connection.query(qString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  select: function(table, cols, cond, cb){

    var qMarks = []
    for(i=0;i<cols.length; i++){
      qMarks.push("?")
    }

    qString = "SELECT " + cols.join(", ") + " FROM " + table + " WHERE " + qMarks.join(", ")
    console.log(qString)

    connection.query(qString, cond, function(err, result){
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  //create a new db entry
  create: function(table, col, val, cb) {
    var qMarks = []
    for(i=0;i<val.length; i++){
      qMarks.push("?")
    }
    var qString = "INSERT INTO " + table + " (" + col.join(", ") + ") values (" + qMarks.join(", ") + ") ";
    console.log(qString);

    connection.query(qString, val, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
 
  //update existing entry
  update: function(table, obj, cb) {
    console.log(obj)

    var qString = "UPDATE " + table + " set ? where ?"

    console.log(qString);
    connection.query(qString, [obj.values, obj.where],function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

module.exports = orm;
