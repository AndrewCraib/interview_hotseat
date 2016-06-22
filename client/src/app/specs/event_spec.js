var Event = require ('../event.js');
var Student = require('../student.js');
var Employer = require('../employer.js');
var Viewer = require('../../views/event_view.js')
var assert = require('chai').assert;
var _ = require('lodash');

describe('an event', function(){

  beforeEach(function(){
    event1 = new Event();
    eView = new Viewer(event1)
    student1 = new Student('Andy', 'pic', 2)
    student2 = new Student('Lewis', 'pic', 3)
    student3 = new Student('Aidan', 'pic', 4)
    student4 = new Student('Chris', 'pic', 5)
    employer1 = new Employer('Crom source', 'logo', 2)
    employer2 = new Employer('Crom source', 'logo', 3)
    employer3 = new Employer('Crom source', 'logo', 4)
    employer4 = new Employer('Crom source', 'logo', 5)
  })

  it('should have students in an array', function(){
    event1.addStudent(student1);
    event1.addStudent(student2);
    assert.equal(2, event1.students.length)
  })

  it('should have employers ina n array', function(){
    event1.addEmployer(employer1)
    assert.equal(1, event1.employers.length);
    assert.equal('Crom source', event1.employers[0].name)
  })

  it('should move last student to top of array when', function(){
    event1.addStudent(student1);
    event1.addStudent(student2);
    event1.addStudent(student3);
    event1.addStudent(student4);
    console.log(eView);
    eView.shuffle();
    console.log('test', eView);
    assert.equal('Chris', eView.changedArray[0].name)


  })

})




