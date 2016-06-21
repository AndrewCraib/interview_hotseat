var Clock = function( limit ){
  this.limit = limit;
  this.minutes = limit;
  this.seconds = 60;
  this.clockText = (this.limit > 9 ? (this.limit + ":00") : ("0" + this.limit + ":00" ));
  this.t = 0;

Clock.prototype = {

  timer = function(){
    t = setTimeout( goTime(), 1000);
  }

  goTime: function(){
    while ( this.minutes >= 0 ){
      this.seconds -= 1;
      if (this.seconds === -1) {
          this.seconds = 59;
          this.minutes -= 1;
        }
      if ( this.minutes === 0 && this.seconds === 0 ){
        break;
      }
    }

    this.clockText = (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00")
                        + ":" + (this.seconds > 9 ? this.seconds : "0" + this.seconds);
  timer();
  }

};

module.exports = Clock;
