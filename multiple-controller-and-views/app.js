var myApp = angular.module("myApp", []);

myApp.controller("mainController", [
  "$scope",
  "$filter",
  "$timeout",
  "$http",
  function ($scope, $filter, $timeout, $http) {
    $scope.name = "main";
  },
]);

myApp.controller("secondController", [
  "$scope",
  "$filter",
  "$timeout",
  "$http",
  function ($scope, $filter, $timeout, $http) {
    $scope.name = "second";
  },
]);

window.addEventListener("hashchange", function () {
  console.log("Hash changed!: " + window.location.hash);
  if (this.window.location.hash === "#/books/1") {
    console.log("book 1 is good");
  }
  if (this.window.location.hash === "#/books/2") {
    console.log("book 2 is good");
  }
});
