var Student = require ('../student')
var assert = require('chai').assert;

describe('a student', function(){

var student1 = new Student( 'John Smith', 'picture' )


 it('should have a name', function () {
  assert.equal( 'John Smith' , Student.studentName);

  it('should have a picture', function () {
   assert.equal( 'picture' , Student.image);
 })
