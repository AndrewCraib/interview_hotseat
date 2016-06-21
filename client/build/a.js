/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Canvas = __webpack_require__(1);
	var Clock = __webpack_require__(2);
	
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


/***/ },
/* 1 */
/***/ function(module, exports) {

	
	var clearButton = document.getElementById('clearButton');
	
	
	  function Shape(x, y, w, h, fill, number) {
	
	    this.x = x || 0;
	    this.y = y || 0;
	    this.w = w || 1;
	    this.h = h || 1;
	    this.fill = fill || '#AAAAAA';
	    this.number = number;
	  }
	
	  Shape.prototype.draw = function(context) {
	    context.fillStyle = this.fill;
	    context.fillRect(this.x, this.y, this.w, this.h);
	  }
	
	  Shape.prototype.contains = function(mx, my) {
	
	    return  (this.x <= mx) && (this.x + this.w >= mx) &&
	    (this.y <= my) && (this.y + this.h >= my);
	  }
	
	 var CanvasState = function(canvas) {
	
	    this.canvas = canvas;
	    this.width = canvas.width;
	    this.height = canvas.height;
	    this.context = canvas.getContext('2d');
	
	    var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
	    if (document.defaultView && document.defaultView.getComputedStyle) {
	      this.stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10)      || 0;
	      this.stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10)       || 0;
	      this.styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10)  || 0;
	      this.styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10)   || 0;
	    }
	
	    var html = document.body.parentNode;
	    this.htmlTop = html.offsetTop;
	    this.htmlLeft = html.offsetLeft;
	
	    this.valid = false; 
	    this.shapes = [];
	    this.dragging = false;
	    this.selection = null;
	    this.dragoffx = 0; 
	    this.dragoffy = 0;
	
	    var myState = this;
	
	    canvas.addEventListener('selectstart', function(e) { e.preventDefault(); return false; }, false);
	
	    canvas.addEventListener('mousedown', function(e) {
	      var mouse = myState.getMouse(e);
	      var mx = mouse.x;
	      var my = mouse.y;
	      var shapes = myState.shapes;
	      var l = shapes.length;
	      for (var i = l-1; i >= 0; i--) {
	        if (shapes[i].contains(mx, my)) {
	          var mySel = shapes[i];
	
	          myState.dragoffx = mx - mySel.x;
	          myState.dragoffy = my - mySel.y;
	          myState.dragging = true;
	          myState.selection = mySel;
	          myState.valid = false;
	          return;
	        }
	      }
	
	      if (myState.selection) {
	        myState.selection = null;
	        myState.valid = false; 
	      }
	    }, true);
	    canvas.addEventListener('mousemove', function(e) {
	      if (myState.dragging){
	        var mouse = myState.getMouse(e);
	
	        myState.selection.x = mouse.x - myState.dragoffx;
	        myState.selection.y = mouse.y - myState.dragoffy;   
	        myState.valid = false; 
	      }
	    }, true);
	    canvas.addEventListener('mouseup', function(e) {
	      myState.dragging = false;
	    }, true);
	
	    canvas.addEventListener('dblclick', function(e) {
	      for (var i = 0; i < 40; i++) {
	        number = i
	      }
	
	      var mouse = myState.getMouse(e);
	      myState.addShape(new Shape(mouse.x - 10, mouse.y - 10, 20, 20, 'rgba(0,255,0,.6)'), number);
	    }, true);
	
	
	
	    this.selectionColor = '#CC0000';
	    this.selectionWidth = 2;  
	    this.interval = 30;
	    setInterval(function() { myState.draw(); }, myState.interval);
	  }
	
	  CanvasState.prototype.addShape = function(shape) {
	    this.shapes.push(shape);
	    this.valid = false;
	  }
	
	  CanvasState.prototype.clear = function() {
	    this.context.clearRect(0, 0, this.width, this.height);
	  }
	
	  CanvasState.prototype.draw = function() {
	
	    if (!this.valid) {
	      var context = this.context;
	      var shapes = this.shapes;
	      this.clear();
	
	      var l = shapes.length;
	      for (var i = 0; i < l; i++) {
	        var shape = shapes[i];
	
	        if (shape.x > this.width || shape.y > this.height ||
	          shape.x + shape.w < 0 || shape.y + shape.h < 0) continue;
	          shapes[i].draw(context);
	      }
	
	      if (this.selection != null) {
	        context.strokeStyle = this.selectionColor;
	        context.lineWidth = this.selectionWidth;
	        var mySel = this.selection;
	        context.strokeRect(mySel.x,mySel.y,mySel.w,mySel.h);
	      }
	
	      this.valid = true;
	    }
	  }
	
	  CanvasState.prototype.getMouse = function(e) {
	    var element = this.canvas, offsetX = 0, offsetY = 0, mx, my;
	
	    if (element.offsetParent !== undefined) {
	      do {
	        offsetX += element.offsetLeft;
	        offsetY += element.offsetTop;
	      } while ((element = element.offsetParent));
	    }
	
	    offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
	    offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;
	
	    mx = e.pageX - offsetX;
	    my = e.pageY - offsetY;
	
	    return {x: mx, y: my};
	  }
	
	module.exports = CanvasState;
	// module.exports = Shape;
	


/***/ },
/* 2 */
/***/ function(module, exports) {

	var Clock = function( limit ){
	  // this.timeTag = timeTag;
	  this.timeTag = document.getElementById('time');
	  this.limit = limit;
	  this.minutes = limit;
	  this.seconds = 0;
	  this.clockText = (this.limit > 9 ? (this.limit + ":00") : ("0" + this.limit + ":00" ));
	  this.timeTag.innerText = this.clockText
	  this.stop = 1; // sets stop the clock on
	
	  //this.t = 0;
	}
	
	Clock.prototype = {
	
	  start: function(){
	      setInterval( function(){
	        if ( this.minutes >= 0 && this.seconds >= -1 ) {
	          this.seconds -= 1;
	
	          if (this.seconds < 0 && this.minutes >= 1){
	            this.minutes -= 1;
	            this.seconds = 59;
	          }
	
	          if (this.minutes === 0 && this.seconds === -1){
	            this.seconds = 0;
	          }
	
	          this.clockText = (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00")
	                              + ":" + (this.seconds > 9 ? this.seconds : "0" + this.seconds);
	
	          this.timeTag.innerText = this.clockText;
	        }
	      }.bind(this), 100 );
	  },
	
	  clear: function(){
	    this.minutes = this.limit;
	    this.seconds = 0;
	    this.clockText = (this.limit > 9 ? (this.limit + ":00") : ("0" + this.limit + ":00" ));
	  }
	  
	};
	
	module.exports = Clock;
	
	// while( this.minutes >= 0 ){
	//   console.log( this )
	//   this.seconds -= 1;
	//   if (this.seconds === -1) {
	//       this.seconds = 59;
	//       this.minutes -= 1;
	//     }
	//   if ( this.minutes === 0 && this.seconds === 0 ){
	//     break;
	//   }
	// }
	
	// start: function(){
	//   for ( this.minutes; this.minutes >= 0; this.minutes-- ) {
	//       setInterval( function(){
	//         for ( var j = ; this.seconds >= -1 )
	//         this.seconds -= 1;
	//
	//         if (this.seconds < 0 && this.minutes >= 1){
	//           this.minutes -= 1;
	//           this.seconds = 59;
	//         }
	//
	//         this.clockText = (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00")
	//                             + ":" + (this.seconds > 9 ? this.seconds : "0" + this.seconds);
	//
	//         this.timeTag.innerText = this.clockText;
	//       }.bind(this), 1000 );
	//     }
	//   },


/***/ }
/******/ ]);
//# sourceMappingURL=a.js.map