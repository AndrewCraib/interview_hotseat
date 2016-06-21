var Canvas = require('./app/canvas.js');
var Event = require('./app/event.js');
var ListView = require('./views/viewer.js')


window.onload = function(){
  var canvas = new Canvas(document.getElementById('canvas'));
  var event = new Event();
  var lists = new ListView(event);

  event.onFetchSuccess = function(){
    lists.render();
  }

  event.fetchLists();

}