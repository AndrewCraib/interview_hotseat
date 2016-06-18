var ListView = function( employers, students){
  this.employers = employers;
  this.students = students;
}

ListView.prototype = {
  render: function(){
    var studentList = document.getElementById('std-ul');
    var employerList = document.getElementById('emp-ul');

    for(employer of this.employers){
      var li = document.createElement('li');
      li.innerText = employer.logo + " employer name " + employer.name;
      employerList.appendChild(li);
    }

    for(student of this.students){
      var li = document.createElement('li');
      li.innerText = student.picture + " student name " + student.name;
      studentList.appendChild(li)
    }


  }
}