angular.module('mr-burger')
  .controller('OrderCtrl', ['$scope', '$location', function($scope, $location){
    $scope.goToOrder = function () {
       $location.path( '/order' );
    };

  }]);