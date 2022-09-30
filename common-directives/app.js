var myApp = angular.module("myApp", []);

myApp.controller("mainController", [
  "$scope",
  "$filter",
  function ($scope, $filter) {
    $scope.handle = "";

    $scope.lowercasehandler = function () {
      return $filter("lowercase")($scope.handle);
    };

    $scope.characters = 5;
    $scope.count = 1;

    $scope.rules = [
      {rulename:"Must be five characters"},
      {rulename:"Must not be used"},
      {rulename:"Must be cool"},
    ]

    $scope.alertClick = function() {
      alert("Clicked")
    }
  },
]);

