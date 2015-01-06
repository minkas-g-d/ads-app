'use strict';

var adsApp = angular
    .module('adsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider) {
            $routeProvider
            .when('/', {
            templateUrl: 'templates/home.html'
            })
            .otherwise({redirectTo: '/'});
});



