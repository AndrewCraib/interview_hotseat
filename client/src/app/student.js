var Student = function(name, image, number){

  this.name = name;
  this.image = image;
  this.type = 'student';
  this.number = number;
  this.hasMet = [];

}

Student.prototype = {

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

module.exports = Student;

