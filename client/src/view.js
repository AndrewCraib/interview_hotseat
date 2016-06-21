var Canvas = require('./app/canvas.js');
var Event = require('./app/event.js');
var Clock = require('./app/clock.js');
var Event = require('./app/event.js');
var ListView = require('./views/viewer.js');
var EventView = require('./views/event_view.js')

window.onload = function(){

  var canvas = new Canvas(document.getElementById('canvas'));
  var event = new Event();
  // var clock = Clock.new(5)
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
    var event = new Event();
  var clock = Clock.new(5)
  var lists = new ListView(event);
  // var eView = new EventView(canvas, event, clock);

  event.onFetchSuccess = function(){
    lists.render();
  }

  event.fetchLists();
  // console.log( "view js", canvas);
  // var clearButton = document.getElementById('clearButton');

  // clearButton.onclick = function(e) {

  // canvas.clear();
  // }

}

