angular.module('mr-burger', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'js/views/splash.html',
            controller: 'SplashCtrl'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('order', {
            url: '/order',
            templateUrl: 'js/views/order.html',
            controller: 'OrderCtrl'
        })

        // .state('tab.dash', {
        //   url: '/dash',
        //   views: {
        //     'tab-dash': {
        //       templateUrl: 'templates/tab-dash.html',
        //       controller: 'DashCtrl'
        //     }
        //   }
        // })

        .state("otherwise", { url : '/'});

    });

