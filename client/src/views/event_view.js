var _ = require('lodash')
var EventView = function(event) {

  this.event = event;
  this.changedArray = this.event.students

}

EventView.prototype = {

  render: function(){
    var studentList = document.getElementById('std-ul');
    var employerList = document.getElementById('emp-ul');
    // console.log(this.event);

    studentList.innerHTML = "";
    employerList.innerHTML = "";

    for(employer of this.event.employers){
     var li = document.createElement('li');
           var img = document.createElement('img');
           img.src = "//logo.clearbit.com/" + employer.name.toLowerCase().replace(/ /g,'') +".com?size=40"
           li.innerText = employer.name;
           employerList.appendChild(img);
           employerList.appendChild(li)
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
         console.log('ca after unshift', this.changedArray);
         for (employer of this.event.employers){
          employer.hasMet.push(this.changedArray[employer.number-1])
        }
        for (student of this.changedArray){
         // student.hasMet.push(this.event.employers[_.findIndex(this.changedArray, function(o) { return o.name === student.name; })].number)
         student.hasMet.push(this.event.employers[_.findIndex(this.changedArray, { 'name' : student.name }) ])
        }

      },



  reRender: function(){

    var studentList = document.getElementById('std-ul');
    var employerList = document.getElementById('emp-ul');

    studentList.innerHTML = "";
    employerList.innerHTML = "";

    for(employer of this.event.employers){
      var li = document.createElement('li');
            var img = document.createElement('img');
            img.src = "//logo.clearbit.com/" + employer.name.toLowerCase().replace(/ /g,'') +".com?size=40"
            li.innerText = employer.name;
            employerList.appendChild(img);
            employerList.appendChild(li)
          }

    for(student of this.changedArray){
      // console.log(student);
      var li = document.createElement('li');
      li.innerText = student.picture + " student name " + student.name;
      studentList.appendChild(li)
      }

      if (this.event.students[0].hasMet.length === this.event.employers.length){
        window.alert('event complete')
      }
    },

    initialMeet: function(){
           var stdIndex = 0
           while( stdIndex < this.event.students.length ){
             this.event.students[stdIndex].hasMet.push( this.event.employers[stdIndex])
             this.event.employers[stdIndex].hasMet.push(this.event.students[stdIndex])
            stdIndex++
           }
         }

};

module.exports = EventView;