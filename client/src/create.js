var Event = require('./app/event.js');
var Employer = require('./app/employer.js');
var Student = require('./app/student.js');
var ListView = require('./views/viewer.js');
var Canvas = require('./app/canvas.js')

window.onload = function(){

  var event = new Event();
  var lists = new ListView(event);

  event.onFetchSuccess = function(){
    lists.render();
  }

  event.fetchLists();

  var empBtn = document.getElementById('employer-btn');
  var empName = document.getElementById('emp-name');
  var empImg = document.getElementById('emp-img');
  var stdBtn = document.getElementById('student-btn');
  var stdName = document.getElementById('std-name');
  var stdImg = document.getElementById('std-img');

  empBtn.onsubmit = function(e){
    // e.preventDefault();
    var newEmp = new Employer(empName.value, empImg.value, (event.employers.length+1))
    event.addEmployer(newEmp);
    lists.render()
    console.log(event.employers);
    newEmp.save();

  }

  stdBtn.onsubmit = function(e){
    // e.preventDefault();
    var newStd = new Student(stdName.value, stdImg.value, (event.students.length+1));
    event.addStudent(newStd);
    lists.render()
    newStd.save()

  }


}
