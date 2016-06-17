var Students = function(){

  this.listOfStudents = []

}

Student.prototype = {

  addStudent: function(name, profilePic){
    this.listOfStudents.push({
      studentName: name,
      image: profilePic
    })
  },

  

}

