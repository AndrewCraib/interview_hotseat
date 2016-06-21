var Canvas = require('./app/canvas.js');
var Clock = require('./app/clock.js');
var Event = require('./app/event.js');
var ListView = require('./views/viewer.js');
var EventView = require('./views/event_view.js')

window.onload = function(){

  var canvas = new Canvas(document.getElementById('canvas'));
  var timeTag = document.getElementById('time');
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var clear = document.getElementById('clear');
  var myClock = new Clock( 2 );
  var event = new Event();
  var lists = new ListView(event);

  event.onFetchSuccess = function(){
    lists.render();
  }

  event.fetchLists();
console.log('lksjdb', event)
  var eView = new EventView(event)




  start.onclick = function(){
    myClock.start();
      
      }
  

  clear.onclick = function(){
    console.log('heeeeey')
    eView.shuffle();
    
  };


  };
 
  

