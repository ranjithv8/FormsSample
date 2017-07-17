webpackJsonp([0],{

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(92);




/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

module.exports = "<label>Username</label> <input type=text /> <label>Password</label> <input type=password />";

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

module.exports = "<div>LoginApp</div> <loginform></loginform>";

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var loginFormComponent = (function(){
	angular.module("customForms").component('loginform',{
		template: __webpack_require__(90)
	});
})();

module.exports = loginFormComponent;

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

var loginComponent = (function(){
	angular.module("loginApp").component('login',{
		template: __webpack_require__(91) 
		
	});
})();

module.exports = loginComponent;

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

var angular = __webpack_require__(11),
	routeProvider = __webpack_require__(23);

var app = angular.module("loginApp",['ui.router','customForms']);
	
angular.module("customForms",[]);

var forms = __webpack_require__(59),
	login = __webpack_require__(60);
		
app.config(function($stateProvider,$urlRouterProvider){
			
	$urlRouterProvider.otherwise('/login');
	$stateProvider
		.state('login', {
			url: '/login',
			component:'login'
		});

});


		


/***/ })

},[94]);