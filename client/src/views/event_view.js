var EventView = function(event) {
  this.event = event;
}

EventView.prototype = {

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