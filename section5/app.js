var myApp = angular.module("myApp", ["ngMessages", "ngResource"]);

myApp.controller("mainController", function ($scope, $log, $filter, $resource) {
  /*   console.log($log);
  console.log($scope);

  $scope.name = "Hakan";
  $scope.formattedName = $filter("uppercase")($scope.name);

  $log.log("Hello.");
  $log.info("this is a info");
  $log.warn("this is a warn");
  $log.error("this is a error");

  $log.info($scope.name);
  $log.info($scope.formattedName); */

  
  console.log($resource);

  
});
