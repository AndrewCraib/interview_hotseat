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

	var Event = __webpack_require__(3);
	var Employer = __webpack_require__(2);
	var Student = __webpack_require__(4);
	var ListView = __webpack_require__(5);
	
	window.onload = function(){
	
	  var event = new Event();
	  var lists = new ListView(event);
	
	  lists.render();
	
	
	}
	
	var employerAdd = function(){
	
	
	
	}

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	var Employer = function(name, logo){
	  this.employersName = name;
	  this.employersLogo = logo;
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
/* 3 */
/***/ function(module, exports) {

	var Event = function(){
	  this.students = [];
	  this.employers = [];
	}
	
	Event.prototype ={
	
	  addEmployer: function(employer){
	    this.employers.push(employer)
	  },
	
	  addStudent: function(student){
	    this.students.push(student)
	  },
	
	  fetchLists:function(){
	     var url = 'http://localhost:3000/lists';
	     var request = new XMLHttpRequest();
	     request.open("GET", url);
	     request.onload = function(){
	       if(request.status === 200){
	         var list = JSON.parse(request.responseText)
	         for(info of list){
	           this.addAccount(new Account(account));
	         }
	         this.onFetchSuccess();
	       }
	     }.bind(this);
	     request.send(null);
	   }
	
	}
	
	module.exports = Event;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var Student = function(name, image){
	
	  this.studentName = name;
	  this.image = image;
	
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
	
	    for(employer of this.event.employers){
	      var li = document.createElement('li');
	      li.innerText = employer.logo + " employer name " + employer.name;
	      employerList.appendChild(li);
	    }
	
	    for(student of this.event.students){
	      var li = document.createElement('li');
	      li.innerText = student.picture + " student name " + student.name;
	      studentList.appendChild(li)
	    }
	
	
	  }
	}
	
	module.exports = ListView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map