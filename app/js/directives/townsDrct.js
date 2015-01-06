'use strict';

adsApp.directive('townsDrct', function($compile) {
    return {
        restrict: 'A',
        templateUrl: 'templates/directives/towns.html'//,
        //controller: TownsController
    };
});
