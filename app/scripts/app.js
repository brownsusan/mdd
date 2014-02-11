'use strict';

var app = angular.module('mddApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'firebase']);

app.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl : 'views/main.html',
		controller : 'MainCtrl'
	});
	
	$routeProvider.when('/project/:projectNumber', {
		templateUrl : 'views/project.html',
		controller : 'ProjCtrl'
	});
	
	$routeProvider.when('/admin', {
		templateUrl : 'views/admin.html',
		controller : 'AdminCtrl'
	});

	$routeProvider.otherwise({
		redirectTo : '/'
	});

});