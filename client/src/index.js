var Event = require('./app/event.js');
var Employer = require('./app/employer.js');
var Student = require('./app/student.js');
var ListView = require('./views/viewer.js');

window.onload = function(){

  var event = new Event();
  var lists = new ListView(event);

  lists.render();


}

var employerAdd = function(){



}