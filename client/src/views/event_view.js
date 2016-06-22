var _ = require('lodash')
var EventView = function(event) {

  this.event = event;
  this.changedArray = this.event.students

}

EventView.prototype = {


  render: function(){
    var studentList = document.getElementById('std-ul');
    var employerList = document.getElementById('emp-ul');
    console.log(this.event);

    studentList.innerHTML = "";
    employerList.innerHTML = "";

    for(employer of this.event.employers){
      // console.log(employer);
      var li = document.createElement('li');
      li.innerText = employer.logo + " employer name " + employer.name;
      employerList.appendChild(li);
    }

    for(student of this.event.students){
      // console.log(student);
      var li = document.createElement('li');
      li.innerText = student.picture + " student name " + student.name;
      studentList.appendChild(li)
    }


  },

    shuffle: function() {

        var lastStudent = this.changedArray.pop();
         this.changedArray.unshift(lastStudent);
         // console.log('ca after unshift', changedArray);
         for (employer of this.event.employers){
          employer.hasMet.push(this.changedArray[employer.number-1].number)
         }
         for (student of this.changedArray){
          
          console.log('boo', this.changedArray.indexOf[student]);
          student.hasMet.push(this.event.employers[_.findIndex(this.changedArray, function(o) { return o.name === student.name; })].number)
         
      }

    },

    reRender: function(){

        var studentList = document.getElementById('std-ul');
        var employerList = document.getElementById('emp-ul');

        studentList.innerHTML = "";
        employerList.innerHTML = "";

        for(employer of this.event.employers){
          // console.log(employer);
          var li = document.createElement('li');
          li.innerText = employer.logo + " employer name " + employer.name;
          employerList.appendChild(li);
        }

        for(student of this.changedArray){
          // console.log(student);
          var li = document.createElement('li');
          li.innerText = student.picture + " student name " + student.name;
          studentList.appendChild(li)
        }

  shuffle: function() {

    var changedArray = this.event.students

    var lastStudent = changedArray.pop();
    changedArray = this.event.students.unshift(lastStudent);
    for (employer of this.event.employers){
      employer.hasMet.push(changedArray[employer.number-1].number)
    }
    for (student of changedArray){
      student.hasMet.push(this.event.employers[changedArray.indexOf[student]].number)
    }

    stdList = getElementById('std-ul')
    while( stdList.firstChild ){
      stdList.removeChild( root.firstChild );
    }

    for(student of changedArray){
      var li = document.createElement('li');
      li.innerText = student.image + " student name " + student.name;
      stdList.appendChild(li);
    }

  }

}


module.exports = EventView;