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
  .controller('SidebarCtrl', function($scope, $http) {
    $scope.title = "This is the sidebar";


    var getUsers = function() {
      $http.get('http://hipstrchat.herokuapp.com/users')
        .success(function(data) {
          console.log(data);
          $scope.users = data;
        })
        .error(function() {
          console.log('error', data);
        })
    };

    $scope.users = getUsers();
  })
  .controller('MessagesCtrl', function($scope, $http) {
    $scope.title = "This is the messages";
    $scope.messages = [];
      $http.get('http://hipstrchat.herokuapp.com/rooms/1')
        .success(function(data) {
          $scope.messages = data;
  })
