var Canvas = require('./app/canvas.js');
var Clock = require('./app/clock.js');

window.onload = function(){

  var canvas = new Canvas(document.getElementById('canvas'));
  console.log( "view js", canvas );


  var timeTag = document.getElementById('time');
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var clear = document.getElementById('clear');
  var myClock = new Clock( 2 );

  start.onclick = function(){
    console.log("HEY");
    myClock.start();
  };

  clear.onclick = function(){
    myClock.clear();
  };
}
