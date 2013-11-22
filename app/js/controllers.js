'use strict';

/* Controllers */

angular.module('localtime.io.controllers', []).
	controller('HomeCtrl', ['$scope', '$timeout', '$location', function($scope, $timeout, $location) {
		var inputWait;
		$scope.linePivot = 630;
		$scope.svgWidth = 1405;
		$scope.offsetRange = 1440;
		$scope.offsetToLinePos = function(offset) {
			var rawPos = $scope.linePivot - offset * $scope.svgWidth /
				$scope.offsetRange;
			while (rawPos < 0) {
				rawPos += $scope.offsetRange;
			}
			return rawPos % $scope.offsetRange;
		};
		$scope.rawDate = $location.search().d || 'Thursday 8PM PST';
		$scope.$watch('rawDate', function(rawDate) {
			if (rawDate) {
				$location.search('d', rawDate);
				$scope.parsed = chrono.parse(rawDate)[0];
			} else {
				$scope.parsed = null;
			}
		});
		$scope.$watch('parsed', function(parsed) {
			if (parsed) {
				$scope.local = moment($scope.parsed.start.date());
				$scope.localTime = $scope.local.format(
					"dddd, MMMM Do YYYY, h:mm:ss a");
				$scope.localTimezone = $scope.local.format("Z");
				$scope.sourceOffset = $scope.parsed.start.timezoneOffset;
				$scope.sourceLinePos = $scope.offsetToLinePos(
					$scope.sourceOffset);
			} else {
				$scope.local = null;
			}
		});
	}]);
