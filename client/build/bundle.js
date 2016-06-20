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

	var Event = __webpack_require__(1);
	var Employer = __webpack_require__(2);
	var Student = __webpack_require__(3);
	var ListView = __webpack_require__(4);
	
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
/* 2 */
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
/* 3 */
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
/* 4 */
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
//# sourceMappingURL=bundle.js.map