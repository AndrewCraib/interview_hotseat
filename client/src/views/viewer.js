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
      console.log(employer);
      var li = document.createElement('li');
      li.innerText = employer.logo + " employer name " + employer.Name;
      employerList.appendChild(li);
    }

    for(student of this.event.students){
      var li = document.createElement('li');
      li.innerText = student.picture + " student name " + student.Name;
      studentList.appendChild(li)
    }


  }
}

module.exports = ListView;