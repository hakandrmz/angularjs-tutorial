var myApp = angular.module("myApp", ["ngMessages", "ngResource"]);

myApp.controller("mainController", [
  "$scope",
  "$timeout",
  function ($scope, $timeout) {
    $scope.name = "Hakan";

    $timeout(function () {
      $scope.name = $scope.name + " Durmaz";
    }, 3000);
  },
]);
