webpackJsonp([0],{

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(94);




/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95);

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

module.exports = "<form name=loginForm ng-submit=$ctrl.submit({data:$ctrl.formData}) novalidate> <div> <label>Username</label> <input type=text name=username ng-model=$ctrl.formData.username min-length=4 ng-pattern=/^[a-z]+[0-9a-z_]*$/ required/> <div ng-messages=loginForm.username.$error ng-if=loginForm.username.$dirty> <div ng-message=required class=form-field-error>Please enter the username</div> <div ng-message=pattern class=form-field-error>Please enter valid username</div> </div> </div> <div> <label>Password</label> <input type=password name=password ng-model=$ctrl.formData.password required/> <div ng-messages=loginForm.password.$error ng-if=loginForm.password.$dirty> <div ng-message=required class=form-field-error>Please enter the password</div> </div> </div> <div> <input type=submit ng-disabled=!loginForm.$valid /> </div> <div>{{ loginForm.$valid | json}}</div> <form></form></form>";

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

module.exports = "<h2>LoginApp</h2> <div class=form-error ng-if=\"!$ctrl.success && $ctrl.submitted\">{{$ctrl.formError}}</div> <div class=form-success ng-if=$ctrl.success>Login Success</div> <loginform submit=$ctrl.submit(data)></loginform> ";

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

var loginFormComponent = (function(){
	angular.module("customForms").component('loginform',{
		bindings:{
			submit: '&'
		},
		template: __webpack_require__(92),
		controller: function() {}
	});
})();

module.exports = loginFormComponent;

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {


var loginComponent = (function(){
	angular.module("loginApp").component('login',{
		bindings:{},
		template: __webpack_require__(93) ,

		controller: function(loginService,errorFactory) {
			this.formError = null;
			this.submit = function(data) {
				response = loginService.authenticate(data.username,data.password);
				if(!response.success) {
					this.formError = errorFactory[response.errorCode]
					this.success = false;
				} else {
					this.success = true;
					this.formError = null;
				}
				this.submitted= true;
			}
		}		
	});
})();

__webpack_require__(96);
__webpack_require__(97)

module.exports = loginComponent;

/***/ }),

/***/ 96:
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

/***/ 97:
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

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

var angular = __webpack_require__(11),
	routeProvider = __webpack_require__(23),
	ngMessages = __webpack_require__(24);

var app = angular.module("loginApp",['ui.router','customForms','ngMessages']);
	
angular.module("customForms",['ngMessages']);

var forms = __webpack_require__(60),
	login = __webpack_require__(61);
		
app.config(function($stateProvider,$urlRouterProvider){
			
	$urlRouterProvider.otherwise('/login');
	$stateProvider
		.state('login', {
			url: '/login',
			component:'login'
		});

});


		


/***/ })

},[98]);