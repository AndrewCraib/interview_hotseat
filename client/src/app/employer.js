var Employer = function(name, logo){
  this.employersName = name;
  this.employersLogo = logo;
}


Employers.prototype ={

  save: function(){
      var url = 'http://localhost:3000/lists';
      var request = new XMLHttpRequest();
      request.open("POST", url);
      request.setRequestHeader("Content-Type", "application/json");
      request.onload = function(){
        if(request.status === 200){
        }
      }
      request.send(JSON.stringify(this));
    }


}

module.exports = Employers;

