var ListView = function( event ){
  this.event = event
}

ListView.prototype = {
  render: function(){
    var studentList = document.getElementById('std-ul');
    var employerList = document.getElementById('emp-ul');
    console.log(this.event);

    studentList.innerHTML = "";
    employerList.innerHTML = "";

    for(employer of this.event.employers){
      var li = document.createElement('li');
      li.innerText = employer.logo + " employer name " + employer.name;
      employerList.appendChild(li);
    }

    for(student of this.event.students){
      var li = document.createElement('li');
      li.innerText = student.image + " student name " + student.name;
      studentList.appendChild(li)
    }


  }
}

module.exports = ListView;