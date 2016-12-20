(function() {
  var app = angular.module("LunchCheck", []);
  app.controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.check = function() {
      if(!$scope.lunchMenu || 0 === $scope.lunchMenu.length) {
        $scope.result = "Please enter data first";
        $scope.alertStyle = "alert-info";
      }
      if($scope.lunchMenu.split(',').length > 3) {
        $scope.result = "Too much!";
        $scope.alertStyle = "alert-danger";
      } else {
        $scope.result = "Enjoy!";
        $scope.alertStyle = "alert-success";
      }
    }
  }
})()
