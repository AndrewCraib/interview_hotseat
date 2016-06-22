var Canvas = require('./app/canvas.js');
var Clock = require('./app/clock.js');
var Event = require('./app/event.js');
var EventView = require('./views/event_view.js')

window.onload = function(){

  var canvas = new Canvas(document.getElementById('canvas'));
  var event = new Event();
  // var eView = new EventView(event);
  var timeTag = document.getElementById('time');
  var start = document.getElementById('start');
  // var stop = document.getElementById('stop');
  var clear = document.getElementById('clear');
  var myClock = new Clock( 2 );

  event.onFetchSuccess = function(){
    eView.render(); 
    eView.initialMeet();
  }

  event.fetchLists();
  console.log('event fetch list', event);

  start.onclick = function(){
    myClock.start();
    start.style.visibilty = 'hidden'
  };

  clear.onclick = function(){
    myClock.clear();
    eView.shuffle();
    eView.reRender();
  };

  var eView = new EventView(event)
  // console.log(eView.event.students);



};