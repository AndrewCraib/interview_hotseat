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

	var Event = __webpack_require__(2);
	var Employer = __webpack_require__(3);
	var Student = __webpack_require__(4);
	var ListView = __webpack_require__(5);
	var Canvas = __webpack_require__(1)
	
	window.onload = function(){
	
	  var event = new Event();
	  var lists = new ListView(event);
	
	  event.onFetchSuccess = function(){
	    lists.render();
	  }
	
	  event.fetchLists();
	
	  var empBtn = document.getElementById('employer-btn');
	  var empName = document.getElementById('emp-name');
	  var empImg = document.getElementById('emp-img');
	  var stdBtn = document.getElementById('student-btn');
	  var stdName = document.getElementById('std-name');
	  var stdImg = document.getElementById('std-img');
	
	  empBtn.onsubmit = function(e){
	    // e.preventDefault();
	    var newEmp = new Employer(empName.value, empImg.value, (event.employers.length+1))
	    event.addEmployer(newEmp);
	    lists.render()
	    console.log(event.employers);
	    newEmp.save();
	
	  }
	
	  stdBtn.onsubmit = function(e){
	    // e.preventDefault();
	    var newStd = new Student(stdName.value, stdImg.value, (event.students.length+1));
	    event.addStudent(newStd);
	    lists.render()
	    newStd.save()
	  
	  }
	
	
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

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
	    context.fillText(this.number, this.x, this.y );
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
	    this.increment = 1;
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
	
	      this.increment = this.shapes.length + 1;
	      var mouse = myState.getMouse(e);
	      myState.addShape(new Shape(mouse.x - 10, mouse.y - 10, 20, 20, '#e6fff7', this.increment));
	    }.bind(this), true);
	
	
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

	
	var Event = function(){
	  this.students = [];
	  this.employers = [];
	  this.onFetchSuccess = null;
	}
	
	Event.prototype ={
	
	  addEmployer: function(employer){
	    this.employers.push(employer)
	  },
	
	  addStudent: function(student){
	    this.students.push(student)
	  },
	
	  meeting: function(employer, student){
	    employer.hasMet.push(student.number);
	    student.hasMet.push(employer.number)
	  },
	
	  fetchLists:function(){
	   var url = 'http://localhost:3000/lists';
	   var request = new XMLHttpRequest();
	   request.open("GET", url);
	   request.onload = function(){
	     if(request.status === 200){
	       var lists = JSON.parse(request.responseText)
	       for (var i = 0; i < lists.length; i++) {
	        if(lists[i].type === 'employer') {
	          this.addEmployer(lists[i]);
	        }
	        else{
	          this.addStudent(lists[i]);
	        }
	      }
	      this.onFetchSuccess();
	    }
	  }.bind(this);
	  request.send(null);
	}
	
	}
	
	module.exports = Event;

/***/ },
/* 3 */
/***/ function(module, exports) {

	var Employer = function(name, logo, number){
	  this.name = name;
	  this.image = logo;
	  this.type = 'employer'
	  this.number = number;
	  this.hasMet = []
	}
	
	
	Employer.prototype ={
	
	  save: function(){
	      var url = 'http://localhost:3000/lists';
	      var request = new XMLHttpRequest();
	      request.open("POST", url);
	      request.setRequestHeader("Content-Type", "application/json");
	      request.onload = function(){
	        if(request.status === 200){
	        }
	      }
	      request.send(JSON.stringify(this));
	    }
	
	
	}
	
	module.exports = Employer;
	


/***/ },
/* 4 */
/***/ function(module, exports) {

	var Student = function(name, image, number){
	
	  this.name = name;
	  this.image = image;
	  this.type = 'student';
	  this.number = number;
	  this.hasMet = [];
	
	}
	
	Student.prototype = {
	
	  save: function(){
	      var url = 'http://localhost:3000/lists';
	      var request = new XMLHttpRequest();
	      request.open("POST", url);
	      request.setRequestHeader("Content-Type", "application/json");
	      request.onload = function(){
	        if(request.status === 200){
	        }
	      }
	      request.send(JSON.stringify(this));
	    }
	
	
	}
	
	module.exports = Student;
	


/***/ },
/* 5 */
/***/ function(module, exports) {

	var ListView = function( event ){
	  this.event = event
	}
	
	ListView.prototype = {
	  render: function(){
	    var studentList = document.getElementById('std-ul');
	    var employerList = document.getElementById('emp-ul');
	    console.log(this.event);
	
	    studentList.innerHTML = "";
	    employerList.innerHTML = "";
	
	    for(employer of this.event.employers){
	      console.log(employer);
	      var li = document.createElement('li');
	      li.innerText = employer.logo + " employer name " + employer.name;
	      employerList.appendChild(li);
	    }
	
	    for(student of this.event.students){
	      console.log(student);
	      var li = document.createElement('li');
	      li.innerText = student.picture + " student name " + student.name;
	      studentList.appendChild(li)
	    }
	
	
	  }
	}
	
	module.exports = ListView;

/***/ }
/******/ ]);
//# sourceMappingURL=b.js.map