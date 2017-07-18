
var loginComponent = (function(){
	angular.module("loginApp").component('login',{
		bindings:{},
		template: require("./login.html") ,

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

require("./../services/login.service.js");
require("./../services/loginError.Factory.js")

module.exports = loginComponent;