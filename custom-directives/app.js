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
    $scope.people = [
      {
        name: "Hakan Durmaz",
        address: "Yıldırım",
        city: "Bursa",
        state: "Marmara",
        zip: "16310",
      },
      {
        name: "Icardi",
        address: "Arena",
        city: "İstanbul",
        state: "Marmara",
        zip: "34001",
      },
      {
        name: "Fatih Terim",
        address: "Bodrum",
        city: "Mugla",
        state: "Ege",
        zip: "10101",
      },
    ];

    $scope.formattedAddress = function (person) {
      return (
        person.address +
        ", " +
        person.city +
        ", " +
        person.state +
        ", " +
        person.zip
      );
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
      personObject: "=",
      formattedAddressFunction: "&",
    },
    transclude: true,
  };
});
