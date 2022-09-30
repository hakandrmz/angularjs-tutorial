var myApp = angular.module("myApp", []);

myApp.controller("mainController", [
  "$scope",
  "$filter",
  "$timeout",
  function ($scope, $filter, $timeout) {
    $scope.handle = "";

    $scope.lowercasehandler = function () {
      return $filter("lowercase")($scope.handle);
    };

    $scope.$watch("handle", function (newValue, oldValue) {
      console.log("Changed!");
      console.log("Old " + oldValue);
      console.log("New " + newValue);
    });

    $timeout(function () {
      $scope.handle = "hkn_drmaz";
      console.log("Scope changed!");
    }, 3000);

    /* TIMEOUT -> SCOPE.APPLY */

    /* setTimeout(function () {
      $scope.$apply(function () {
        $scope.handle = "hkn_drmaz";
        console.log("Scope changed!");
      });
    }, 3000); */
  },
]);
