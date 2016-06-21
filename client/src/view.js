var Canvas = require('./app/canvas.js');
var Event = require('./app/event.js');
var Clock = require('./app/clock.js');
var ListView = require('./views/viewer.js');
var EventView = require('./views/event_viewer.js')


window.onload = function(){
  var canvas = new Canvas(document.getElementById('canvas'));
  var event = new Event();
  var clock = Clock.new(5)
  var lists = new ListView(event);
  var eView = new EventView(canvas, event, clock);

  event.onFetchSuccess = function(){
    lists.render();
  }

  event.fetchLists();

}