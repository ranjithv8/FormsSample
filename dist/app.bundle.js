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

module.exports = "<form name=thenga ng-submit=$ctrl.onSubmit()> <div> <label>Username</label> <input type=text /> </div> <div> <label>Password</label> <input type=password /> </div> <div> <button type=submit>Submit</button> </div> <form></form></form>";

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

module.exports = "<div>LoginApp</div> <div>{{$ctrl.formError}}</div> <loginform></loginform>";

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var loginFormComponent = (function(){
	angular.module("customForms").component('loginform',{
		bindings:{},
		template: __webpack_require__(90),
		onSubmit: function() {
			debugger;
			alert("Okay")
		}
	});
})();

module.exports = loginFormComponent;

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {


var loginComponent = (function(){
	angular.module("loginApp").component('login',{
		bindings:{},
		template: __webpack_require__(91) ,

		submit: function() {
			response = loginService.authenticate(this.username,this.password);
			if(!response.success) {
				this.formError = errorFactory[errorCode]
			} else {
				this.successMessage = true
			}
		},

		submitForm: function() {
			debugger;
			alert("Okay")
		}
		
	});
})();

__webpack_require__(94);
__webpack_require__(95)

module.exports = loginComponent;

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

var loginService = (function(){
	angular.module("loginApp").service("loginService",function() {
		this.authenticate = function(username,password) {
			var errorCode  = null,
				responseObj = {};
			switch(username) {
				case "login1234" : errorCode = "login-001";
							  	   break;
				case "login6789" : errorCode = "login-002";
							  	   break;
				case "login0345" : errorCode = "login-003";
							  	   break;
			} 
			if(!errorCode) {
				responseObj = {
					success: true,
					error: false,
					errorCode: null
				}
			} else {
				responseObj = {
					success: false,
					error: true,
					errorCode: errorCode
				}
			}
			return responseObj;			
		}
	}); 
})()

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

var errorFactory = (function(){
	angular.module("loginApp").factory("errorFactory",function() {
		return {
			"login-001":"The username/password is incorrect",
			"login-002":"The account is currently locked",
			"login-003":"Your password has expired please go to change management"
		}
	}); 
})()

/***/ }),

/***/ 96:
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

},[96]);