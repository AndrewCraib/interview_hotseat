var Event = require ('../event.js');
var Student = require('../student.js');
var Employer = require('../employer.js');
var assert = require('chai').assert;

describe('an event', function(){

  beforeEach(function(){
    var event1 = new Event();
    var student1 = new Student('Andy', 'pic', 2)
    var student2 = new Student('Lewis', 'pic', 3)
    var employer1 = new Employer('Crom source', 'logo', 2)
  })

  it('should have students in an array', function(){
    var event1 = new Event();
    var student1 = new Student('Andy', 'pic', 2)
    var student2 = new Student('Lewis', 'pic', 3)
    event1.addStudent(student1);
    event1.addStudent(student2);
    assert.equal(2, event1.students.length)
  })

  it('should have employers ina n array', function(){
    var event1 = new Event();
    var employer1 = new Employer('Crom source', 'logo', 2)
    event1.addEmployer(employer1)
    assert.equal(1, event1.employers.length);
    assert.equal('Crom source', event1.employers[0].name)
  })

})




