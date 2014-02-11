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
	var title = $('.title').val();
	var imgUrl = $('.imgUrl').val();
	var description = $('.description').val();
	
	$scope.newProject = {
		title: title,
		imgUrl: imgUrl,
		description: description
	};
	
	$scope.addProject = function(){
		$scope.projects.$add($scope.newProject);	
	};
	

	 // For updates - being called on the green splendid button's ng-click

	// $scope.saveData = function() {
		// $scope.data.projects = [{
			// title : 'Project 1',
			// imgUrl : 'project1.jpg',
			// description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		// }, {
			// title : 'Project 2',
			// imgUrl : 'project2.jpg',
			// description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		// }, {
			// title : 'Project 3',
			// imgUrl : 'project3.jpg',
			// description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		// }, {
			// title : 'Project 4',
			// imgUrl : 'project4.jpg',
			// description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		// }, {
			// title : 'Project 5',
			// imgUrl : 'project5.jpg',
			// description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		// }, {
			// title : 'Project 6',
			// imgUrl : 'project6.jpg',
			// description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		// }]
	// };

}); 