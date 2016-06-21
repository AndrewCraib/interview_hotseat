var Student = require ('../student')
var assert = require('chai').assert;

describe('a student', function(){

  var student1 = new Student( 'John Smith', 'picture', 1 )


  it('should have a name', function () {
    assert.equal( 'John Smith' , student1.name);
  })

  it('should have a picture', function () {
   assert.equal( 'picture' , student1.image);
 })

  it('should have a number', function(){
    assert.equal( 1, student1.number)
  })

  it('should have a type', function(){
    assert.equal('student', student1.type)
  })

})
