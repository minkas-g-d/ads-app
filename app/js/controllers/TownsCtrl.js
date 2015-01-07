'use strict';

adsApp.controller('TownsCtrl', ['$scope', 'publicData', function ($scope, publicData){
    $scope.townNamePerId = [];
    publicData.getAllTowns()
        .$promise
        .then(
            function(data) {
                $scope.towns = data;
                $scope.townNamesPerId = [];
                angular.forEach($scope.towns, function(value) {
                    var currentId = value.id;
                    this[currentId] = value.name;
                },$scope.townNamePerId);
                //console.log($scope.townNamePerId);
            },
            function(error) {
                console.log(error);
            });
}]);
