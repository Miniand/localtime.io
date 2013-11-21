'use strict';

angular.module('whatsMyTimeZone', [
	'ngRoute',
	'whatsMyTimeZone.filters',
	'whatsMyTimeZone.services',
	'whatsMyTimeZone.directives',
	'whatsMyTimeZone.controllers'
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
