'use strict';

angular.module('mddApp').controller('MainCtrl', function($scope, FireConn) {

	$scope.projects = FireConn.$child('projects');

	$scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
});

angular.module('mddApp').controller('ProjCtrl', function($scope, FireConn, $routeParams) {

	$scope.project = FireConn.$child('projects').$child(parseInt($routeParams.projectNumber) - 1);

});

angular.module('mddApp').controller('AdminCtrl', function($scope, FireConn, $routeParams) {
	$scope.projects = FireConn.$child('projects');
	$scope.addProject = function() {
		console.log('running');
		var title = $('input.title').val();
		var imgUrl = $('.imgUrl').val();
		var description = $('.description').val();
		//set a variable for the object
		$scope.newProject = {
			title : title,
			imgUrl : imgUrl,
			description : description
		};
		// AngularFire $add method
		$scope.projects.$add($scope.newProject);
	}
});
