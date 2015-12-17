'use strict';

/**
 * @ngdoc overview
 * @name myblogApp
 * @description
 * # myblogApp
 *
 * Main module of the application.
 */
angular
  .module('myblogApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($routeProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
    // $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('wall', 
    {
      url: '/',
      templateUrl: 'views/wall.html',
      controller: 'ArticleController',
    })

    .state('post', 
    {
      url: '/post/:post_name',
      templateUrl: 'views/post.html',
      controller: 'ArticleController',
    })
  });
