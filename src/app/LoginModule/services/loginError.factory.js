var errorFactory = (function(){
	angular.module("loginApp").factory("errorFactory",function() {
		return {
			"login-001":"The username/password is incorrect",
			"login-002":"The account is currently locked",
			"login-003":"Your password has expired please go to change management"
		}
	}); 
})()