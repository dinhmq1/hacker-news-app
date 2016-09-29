'use strict';

angular.module('app', [
  'ui.router',
  'ngAnimate',
  'firebase',
  'app.common'
])
  .constant('ENDPOINT_URI', '/app/public/items.json')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('/', {
        url:'/',
        templateUrl: 'app/main/main.html',
      })
      .state('newest', {
        url:'/newest',
        templateUrl: 'app/newest/newest.tmpl.html',
        controller: 'NewestCtrl',
        controllerAs: 'ctrl'
      })
    ;
  })
;
