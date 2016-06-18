var Event = function(){
  this.students = [];
  this.employers =[];
}

Event.prototype ={

  addEmployer: function(name, logo){
    this.employers.push({
      'employersName': name,
      'employersLogo': logo
    })
  },

  addStudent: function(name, profilePic){
    this.students.push({
      'studentName': name,
      'image': profilePic
    })
  },

}