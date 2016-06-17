var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/hotseat';

MongoClient.connect(url, function(err, db){
  var employers = db.collection('employers');
  var students = db.collection('students');
  students.find({}).toArray(function(err, docs){
    db.close();
  })
  employers.find({}).toArray(function(err, docs){
    db.close();
  });
})