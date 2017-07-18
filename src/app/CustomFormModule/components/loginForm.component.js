var loginFormComponent = (function(){
	angular.module("customForms").component('loginform',{
		bindings:{},
		template: require("./loginForm.html"),
		onSubmit: function() {
			debugger;
			alert("Okay")
		}
	});
})();

module.exports = loginFormComponent;