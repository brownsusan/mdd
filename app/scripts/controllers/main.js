'use strict';

angular.module('mddApp').controller('MainCtrl', function($scope, FireConn) {

	$scope.projects = FireConn.$child('projects');

	$scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
});

angular.module('mddApp').controller('ProjCtrl', function($scope, FireConn, $routeParams) {

	$scope.project = FireConn.$child('projects').$child(parseInt($routeParams.projectNumber) - 1);

});

angular.module('mddApp').controller('AdminCtrl', function($scope, FireConn, $routeParams) {
	//get the values
	var title = $('input.title').text();
	var imgUrl = $('.imgUrl').val();
	var description = $('.description').text();
	//set a variable for the object
	$scope.newProject = {
		title : title,
		imgUrl : imgUrl,
		description : description
	};
	//add the project
	$scope.projects = FireConn.$child('projects');
	$scope.addProject = function() {
		console.log('running');
		// AngularFire $add method
		$scope.projects.$add($scope.newProject);
	}
});
