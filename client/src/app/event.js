var Event = function(){
  this.students = [];
  this.employers = [];
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
         var list = JSON.parse(request.responseText)
         for(info of list){
           this.addAccount(new Account(account));
         }
         this.onFetchSuccess();
       }
     }.bind(this);
     request.send(null);
   }

}

module.exports = Event;