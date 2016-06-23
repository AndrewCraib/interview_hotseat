var ListView = function( event ){
  this.event = event
}

ListView.prototype = {
  render: function(){
    var studentList = document.getElementById('std-ul');
    var employerList = document.getElementById('emp-ul');


    studentList.innerHTML = "";
    employerList.innerHTML = "";

    for(employer of this.event.employers){

      var li = document.createElement('li');
      var img = document.createElement('img');
      img.src = "//logo.clearbit.com/" + employer.name.toLowerCase().replace(/ /g,'') +".com?size=40";
      li.innerText = employer.name;
      employerList.appendChild(img);
      employerList.appendChild(li)
     
    }

    for(student of this.event.students){

      var li = document.createElement('li');
      var img = document.createElement('img');
      img.src = "//logo.clearbit.com/codeclan.com?size=40"
      li.innerText = "Student Name: " + student.name;
      studentList.appendChild(img);
      studentList.appendChild(li);
    }

  }
}

module.exports = ListView;