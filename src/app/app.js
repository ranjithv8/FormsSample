var angular = require('angular'),
	routeProvider = require('@uirouter/angularjs'),
	ngMessages = require('angular-messages');

var app = angular.module("loginApp",['ui.router','customForms','ngMessages']);
	
angular.module("customForms",['ngMessages']);

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


		
