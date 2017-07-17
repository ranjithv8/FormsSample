var angular = require('angular'),
	routeProvider = require('@uirouter/angularjs');

var app = angular.module("loginApp",['ui.router','customForms']);
	
angular.module("customForms",[]);

var forms = require("./CustomFormModule/index.js"),
	login = require("./LoginModule/index.js");
		
app.config(function($stateProvider,$urlRouterProvider){
			
	$urlRouterProvider.otherwise('/login');
	$stateProvider
		.state('login', {
			url: '/login',
			component:'login'
		});

});


		
