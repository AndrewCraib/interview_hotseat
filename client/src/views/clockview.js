var Clock = require('../app/clock.js')

var ClockView = function( session ){
  this.clock = new Clock( session );
}

ClockView.prototype = {

  clockRender: function(){
    var h1 = document.getElementsByTagName('h3')[0];
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var clear = document.getElementById('clear');

    /* Start button */
    start.onclick = this.clock.timer();

    /* Stop button */
    stop.onclick = function() {
        clearTimeout(this.clock.t);
    }

    /* Clear button */
    clear.onclick = function() {
        h1.textContent = (this.limit > 9 ? (this.limit + ":00") : ("0" + this.limit + ":00" ));
        this.clock.seconds = 0; this.clock.minutes = this.clock.limit;
    }

  }

};

module.exports = ClockView;
