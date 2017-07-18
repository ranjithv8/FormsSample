
var loginComponent = (function(){
	angular.module("loginApp").component('login',{
		bindings:{},
		template: require("./login.html") ,

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

require("./../services/login.service.js");
require("./../services/loginError.Factory.js")

module.exports = loginComponent;