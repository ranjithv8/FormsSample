var loginFormComponent = (function(){
	angular.module("customForms").component('loginform',{
		template: require("./loginForm.html")
	});
})();

module.exports = loginFormComponent;