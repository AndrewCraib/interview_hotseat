var Canvas = require('./app/canvas.js');
var Clock = require('./app/clock.js');
var Event = require('./app/event.js');
// var ListView = require('./views/viewer.js');
var EventView = require('./views/event_view.js')

window.onload = function(){

  var canvas = new Canvas(document.getElementById('canvas'));
  var event = new Event();
  var eView = new EventView(event);
  var timeTag = document.getElementById('time');
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var clear = document.getElementById('clear');
  var myClock = new Clock( 2 );

  start.onclick = function(){
    myClock.start();
  };

  clear.onclick = function(){
    myClock.clear();
    eView.shuffle();
    eView.reRender();
  };

  

  event.onFetchSuccess = function(){
    eView.render();
  }

  event.fetchLists();
  
}


