'use strict';

angular.module('mddApp').controller('MainCtrl', function($scope, FireConn) {
	
	$scope.projects = FireConn.$child('projects');

	$scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
});

angular.module('mddApp').controller('ProjCtrl', function($scope, FireConn, $routeParams) {

	
	$scope.project = FireConn.$child('projects').$child(parseInt($routeParams.projectNumber) - 1);
	
});

angular.module('mddApp').controller('AdminCtrl', function($scope, FireConn, $routeParams) {
	//push some data
	
	
});