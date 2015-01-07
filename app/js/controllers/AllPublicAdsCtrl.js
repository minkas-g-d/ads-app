'use strict';

adsApp.controller('AllPublicAdsCtrl', [ '$scope', 'publicData', function($scope, publicData) {
    publicData.getAllAds()
        .$promise
        .then(
            function(data) {
                //console.log(data);
                $scope.adsData = data;
                //console.log($scope.allTowns);
            },
            function(error) {
                console.log(error);
            }
    );
}]);
