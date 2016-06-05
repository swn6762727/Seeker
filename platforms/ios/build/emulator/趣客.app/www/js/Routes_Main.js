angular.module('app.routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider


            .state('tabsController.page2', {
                url: '/discover',
                views: {
                    'tab4': {
                        templateUrl: 'Main/Discover.html',
                        controller: 'page2Ctrl'
                    }
                }
            })

            .state('tabsController.page3', {
                url: '/add',
                views: {
                    'tab5': {
                        templateUrl: 'Main/Submit.html',
                        controller: 'page3Ctrl'
                    }
                }
            })

            .state('tabsController.page4', {
                url: '/community',
                views: {
                    'tab6': {
                        templateUrl: 'Main/Community.html',
                        controller: 'page4Ctrl'
                    }
                }
            })

            .state('tabsController', {
                url: '/page1',
                templateUrl: 'Main/tabsController.html',
                abstract: true
            })


            .state('interest_list', {
                url: '/interest_list',
                templateUrl: 'Main/Interest_list.html'
            });
            $urlRouterProvider.otherwise('/page1/community')


    });
