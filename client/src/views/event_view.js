var EventView = function(event, clock) {

  this.event = event;
  this.clock = clock;

}

CanvasView.prototype = {

    render: function() {

      var changedArray = this.event.students
      clock.onZero = function(){
        var lastStudent = changedArray.pop();
         changedArray = this.event.students.unshift(lastStudent);
         for (employer of this.event.employers){
          employer.hasMet.push(changedArray[employer.number-1].number)
         }
         for (student of changedArray){
          student.hasMet.push(this.event.employers[changedArray.indexOf[student]].number)
         }

      }

    }

}

module.exports = EventView;