(function(){
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
    function LunchCheckController($scope,$filter,$injector){
$scope.name = "";
$scope.state = "sunrise";
$scope.upper = function (){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
}
$scope.imagechange = function(){
$scope.state = "sunset";
}
//console.log($injector.annotate(LunchCheckController));


}


})
();
