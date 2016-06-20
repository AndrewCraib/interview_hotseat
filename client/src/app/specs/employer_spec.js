var Employer = require ('../employer')
var assert = require('chai').assert;

describe('an employer', function(){

var employer1 = new Employer( 'Cromsource', 'logo' )


 it('should have a name', function () {
  assert.equal( 'Cromsource' , Employer.employersName);

  it('should have a logo', function () {
   assert.equal( 'logo' , Employer.employersLogo);
 })