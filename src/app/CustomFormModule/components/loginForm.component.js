var loginFormComponent = (function(){
	angular.module("customForms").component('loginform',{
		bindings:{
			submit: '&'
		},
		template: require("./loginForm.html"),
		controller: function() {}
	});
})();

module.exports = loginFormComponent;