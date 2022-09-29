var myApp = angular.module("myApp", []);

myApp.controller("mainController", [
  "$scope",
  "$filter",
  function ($scope, $filter) {
    $scope.handle = "";

    $scope.lowercasehandler = function () {
      return $filter("lowercase")($scope.handle);
    };
  },
]);

