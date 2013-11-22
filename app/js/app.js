'use strict';

angular.module('localtime.io', [
	'ngRoute',
	'localtime.io.filters',
	'localtime.io.services',
	'localtime.io.directives',
	'localtime.io.controllers'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl',
		reloadOnSearch: false
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
}]);
