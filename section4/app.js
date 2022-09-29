var myApp = angular.module("myApp", []);

myApp.controller("mainController", function ($scope) {
  /* $scope.name = "Jane Doe";
  $scope.coder = "Hakan Durmaz";
  $scope.getName = function () {
    return "John Doe";
  };
  console.log($scope.getName); */

  console.log($scope);
});

var searchPeople = function searchPeople(
  $scope,
  firstName,
  lastName,
  height,
  age,
  accupation
) {
  return "Jane Doe";
};

/* var searchPeopleString = searchPeople.toString(); */

//console.log(angular.injector().annotate(searchPeople));
