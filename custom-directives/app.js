var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider) {
  $routeProvider

    .when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController",
    })

    .when("/second", {
      templateUrl: "pages/second.html",
      controller: "secondController",
    })

    .when("/second/:num", {
      templateUrl: "pages/second.html",
      controller: "secondController",
    });
});

myApp.controller("mainController", [
  "$scope",
  "$log",

  function ($scope, $log) {
    $scope.person = {
      name: "Hakan Durmaz",
      address: "Yıldırım/Bursa",
    };
  },
]);

myApp.controller("secondController", [
  "$scope",
  "$log",
  "$routeParams",

  function ($scope, $log, $routeParams) {},
]);

myApp.directive("searchResult", function () {
  return {
    restrict: "AECM", //ATTRIBUTE, ELEMENT VE CLASS GOSTERIMI ICIN
    templateUrl: "directives/searchresult.html",
    replace: true,
    scope: {
      personName: "@",
      personAddress: "@"
    }
  };
});
