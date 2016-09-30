'use strict';

angular.module('app', [
  'ui.router',
  'ngAnimate',
  'firebase',
  'app.common',
  'ng-fx'
])
  .constant('ENDPOINT_URI', '/app/public/items.json')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/newest');

    $stateProvider
      .state('/', {
        url:'/',
        templateUrl: 'app/main/main.html',
      })
      .state('newest', {
        url:'/newest',
        templateUrl: 'newest.tmpl.html',
        controller: 'NewestCtrl',
        controllerAs: 'ctrl'
      })
    ;
  })
;
