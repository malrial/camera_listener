
const MONGO_URL = "mongodb://localhost:27017/";
const DB = "mydb";
const LOG_COLLECTION = "logs";


var MongoClient = require('mongodb').MongoClient;
var url = MONGO_URL;


//inserta un nuevo log en el repositorio
function insertLog(object) {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db(DB);

    dbo.collection(LOG_COLLECTION).insertOne(object, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted 4");
      db.close();
    });
  })
}

exports.insertLog = insertLog;