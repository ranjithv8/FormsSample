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