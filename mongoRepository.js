var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function insertLog(object){
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    
    dbo.collection("customers").insertOne(object, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted 4");
      db.close();
    });
})}

exports.insertLog = insertLog;