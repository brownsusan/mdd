'use strict';

/*global firebase*/
angular.module('mddApp')
.factory('FireConn', ['$firebase',function($firebase){
	var url = 'https://sbrownmdd.firebaseio.com';
	var ref = new Firebase(url);
	
	return $firebase(ref);
}]);