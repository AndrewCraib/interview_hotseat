var Employers = function(){
  this.listOfEmployers = [];
}


Employers.prototype ={

  addEmployers: function(name, logo){
    this.listOfEmployers.push({
      employersName: name,
      employersLogo: logo
    })
  }

}

module.exports = Employers;