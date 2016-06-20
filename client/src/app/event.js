
var Event = function(){
  this.students = [];
  this.employers = [];
  this.onFetchSuccess = null;
}

Event.prototype ={

  addEmployer: function(employer){
    this.employers.push(employer)
  },

  addStudent: function(student){
    this.students.push(student)
  },

  fetchLists:function(){
   var url = 'http://localhost:3000/lists';
   var request = new XMLHttpRequest();
   request.open("GET", url);
   request.onload = function(){
     if(request.status === 200){
       var lists = JSON.parse(request.responseText)
       for(info of lists){
        if(info.type === 'employer'){
         this.addEmployer(info);
       }
       else{
        this.addStudent(info);
      }
    }
    this.onFetchSuccess();
  }
}.bind(this);
request.send(null);
}

}

module.exports = Event;