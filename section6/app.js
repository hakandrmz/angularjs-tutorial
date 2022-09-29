var myApp = angular.module("myApp", ["ngMessages", "ngResource"]);

myApp.controller("mainController", [
  "$scope",
  "$log",
  "$filter",
  "$resource",
  function ($scope, $log, $filter, $resource) {
    console.log($log);
    console.log($scope);

    $scope.name = "HakaN";
    $scope.formattedName = $filter("lowercase")($scope.name);

    $log.log("Hello.");
    $log.info("this is a info");
    $log.warn("this is a warn");
    $log.error("this is a error");

    $log.info($scope.name);
    $log.info($scope.formattedName);

    console.log($resource);
  },
]);
