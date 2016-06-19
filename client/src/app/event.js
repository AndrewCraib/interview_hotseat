var Event = function(){
  this.students = [];
  this.employers =[];
  this.onFetchSuccess = null;
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

  fetchLists: function(){
    var url = 'http://localhost:3000/lists'
    var request = new XMLHttpRequest();
    request.onload = function(){
      if(request.status === 200){
        var lists = JSON.parse(request.resposeText);
        for (info of lists){
          console.log('fetch', info);
        }
        this.onFetchSuccess();
      }
    }.bind(this);
    request.send(null);
  }

}