var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var MongoClient = require('mongodb').MongoClient;

var url = "/.mongodb://localhost:27017/bucket_list";


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


app.get('/lists', function(req, res){
  MongoClient.connect(url, function(err, db){
    var students = db.collection('students');
    var employers = db.collection('employers');
    students.find({}).toArray(function(err, docs){
      res.json(docs);
      db.close();
    });
    employers.find({}).toArray(function(err, docs){
      res.json(docs);
      db.close();
    });
  })
})

app.post('/lists', function(req,res) {
  console.log('body',req.body);
  MongoClient.connect(url, function(err,db) {
    var students = db.collection('students');
    var employers = db.collection('employers');
    students.insert({"student Name": req.body.name, "image": req.body.picture})
    employers.insert({'employersName': req.body.name, 'employers logo': req.body.logo})
    res.status(200).end();
    db.close();
  })

})

app.use(express.static('client/build'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});