var Canvas = require('./app/canvas.js')

window.onload = function(){
  var canvas = new Canvas(document.getElementById('canvas'));
  console.log( "view js", canvas);
  var clearButton = document.getElementById('clearButton');

  clearButton.onclick = function(e) {
 
  canvas.clear();
  }

}


