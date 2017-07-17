var loginComponent = (function(){
	angular.module("loginApp").component('login',{
		template: require("./login.html") 
		
	});
})();

module.exports = loginComponent;