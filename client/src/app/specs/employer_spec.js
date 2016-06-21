var Employer = require ('../employer');
var assert = require('chai').assert;

describe('an employer', function(){

  var employer1 = new Employer( 'Cromsource', 'logo', 1 )


  it('should have a name', function () {
    assert.equal( 'Cromsource' , employer1.name);
  })

  it('should have a logo', function () {
     assert.equal( 'logo' , employer1.image);
   })

  it('should have a number', function(){
    assert.equal(1, employer1.number)
  })

  it ('should have a type', function(){
    assert.equal('employer', employer1.type)
  })

  })


