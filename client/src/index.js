var Student = require('./app/student.js');
var Employer = require('./app/employer.js');
var Viewer = require('./views/viewer.js')


window.onload = function(){

  var students = new Student();
  var employers = new Employer();
  var viewer = new Viewer(students, employer);

  students.onFetchSuccess(){
  };
  employers.onFetchSuccess();

}