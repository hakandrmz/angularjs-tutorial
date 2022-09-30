var myApp = angular.module("myApp", []);

myApp.controller("mainController", [
  "$scope",
  "$filter",
  "$timeout",
  "$http",
  function ($scope, $filter, $timeout, $http) {
/*     $http
      .get("https://dog.ceo/api/breeds/imag/random")
      .then(function (result, error) {
        $scope.dog = result;
        console.log(error);
        console.log(result);
      }); */

    $http({
      method: "get",
      url: "https://dog.ceo/api/breeds/image/random",
    }).then(
      function (response) {
        console.log(response);
        $scope.dog = response.data;
      },
      function (error) {
        console.log(error, "can not get data.");
      }
    );
  },
]);
