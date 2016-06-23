var Event = require('./app/event.js');
var Employer = require('./app/employer.js');
var Student = require('./app/student.js');
var ListView = require('./views/viewer.js');


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
    var newEmp = new Employer(empName.value, (event.employers.length+1))
    event.addEmployer(newEmp);
    console.log(newEmp);
    lists.render()
    newEmp.save();

  }

  stdBtn.onsubmit = function(e){
    // e.preventDefault();
    var newStd = new Student(stdName.value, (event.students.length+1));
    event.addStudent(newStd);
    lists.render()
    newStd.save()

  }


}
