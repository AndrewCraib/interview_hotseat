var Event = require ('../event');
var Student = require('../student');
var Employer = require('../employer');
var assert = require('chai').assert;

describe('an event', function(){

  beforeEach(function(){
    var event1 = new Event();
    var student1 = new Student('Andy', 'pic', 2)
    var student2 = new Student('Lewis', 'pic', 3)
    var employer1 = new Employer('Crom source', 'logo', 2)
  })

  it('should have students in an array', function(){
    event1.addStudent(student1);
    event1.addStudent(student2);
    assert.equal(2, event1.students.length)
  })

})




