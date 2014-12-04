angular.module('hipstrchat')
  // .controller('AppCtrl', function($scope){
  //   console.log('loaded');

  //   $scope.title = "This is the app ctrl";

  //   $scope.heroes = [
  //     'Superman', 'Spiderman', 'Stretchguy', 'the Flash'
  //   ];

  //   $scope.buttonClicked = function () {
  //     alert('You clicked the button!');
  //   };
  // })
  .controller('HeaderCtrl', function($scope) {
    $scope.title = "This is the header";
  })
  .controller('SidebarCtrl', function($scope) {
    $scope.title = "This is the sidebar";
  })
  .controller('MessagesCtrl', function($scope) {
    $scope.title = "This is the messages";
  })

