'use strict';

adsApp.directive('allPublicAds', function() {
    return {
        controller: 'AllPublicAdsCtrl',
        restrict: 'A',
        templateUrl: 'templates/directives/all-public-ads.html'
    };
});
