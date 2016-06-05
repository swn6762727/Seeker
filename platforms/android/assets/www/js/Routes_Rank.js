angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

      .state('default', {
    url: '/page2',
    templateUrl: 'Log/Login.html',
    controller: 'loginCtrl'
  })

      .state('signup', {
    url: '/page5',
    templateUrl: 'Log/Signup.html',
    controller: 'signupCtrl'
  })

      .state('login', {
        url: '/page7',
        templateUrl: 'Main.html',
        controller: 'signupCtrl'
      })


$urlRouterProvider.otherwise('/page2')



});
