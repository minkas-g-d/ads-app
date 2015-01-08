'use strict';

var adsApp = angular
    .module('adsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/home.html'
                })
                .when('/login', {
                    templateUrl: 'templates/login.html'
                })
                .when('/register', {
                    templateUrl: 'templates/register.html'
                })
                .otherwise({redirectTo: '/'});
});

adsApp.constant('baseSrvUrl', 'http://softuni-ads.azurewebsites.net/api/');



