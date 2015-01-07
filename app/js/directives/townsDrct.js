'use strict';

adsApp.directive('townsDrct', function() {
    return {
        controller: 'TownsCtrl',
        restrict: 'A',
        templateUrl: 'templates/directives/towns.html'

    };
});
