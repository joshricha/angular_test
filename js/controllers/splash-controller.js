angular.module('mr-burger')
  .controller('SplashCtrl', function($scope, $state){
    $scope.goToOrder = function () {
      $state.transitionTo( 'order' );
    };

    window.$state = $state;

  });