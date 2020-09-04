(function(){
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
function LunchCheckController($scope) {

		$scope.chkLnchItms = function () {
			if ($scope.itms === undefined || $scope.itms === ""){
				$scope.msg = "Please enter data first";
                $scope.color ="red";
			}
			else {
				console.log($scope.itms);
				var d = $scope.itms.split(',');
				var cnt=0;
				for ( var k=0; k<d.length; k++){
					if (d[k] === undefined || d[k] === " " || d[k] === ""){
						continue;
					}
					else {
						cnt++;
					}
				}
				if (cnt > 3){
					$scope.msg = "Too much!";
                    $scope.color ="green";
				}
				else {
					$scope.msg = "Enjoy!";
                    $scope.color ="green";
				}
			}
		};
	}

})
();
