'use strict';

adsApp.controller('TownsCtrl', ['$scope', 'publicData', function ($scope, publicData){
    publicData.getAllTowns()
        .$promise
        .then(
            function(data) {
                $scope.towns = data;
            },
            function(error) {
                console.log(error);
            });
}]);
