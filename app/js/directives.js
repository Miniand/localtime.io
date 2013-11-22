'use strict';

/* Directives */


angular.module('localtime.io.directives', []).
	directive('focusOnLoad', [function() {
		return function(scope, elm, attrs) {
			elm[0].focus();
		};
	}]);
