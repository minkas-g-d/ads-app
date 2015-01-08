'use strict';

adsApp.directive('navigationDrct', function(){
    return {
        controller: 'NavigationCtrl',
        restrict: 'A',
        templateUrl: 'templates/directives/navigation.html'
    };
});
