'use strict';

adsApp.controller('CategoriesCtrl', ['$scope', 'publicData', function($scope, publicData) {
    $scope.catNamePerId = [];
    publicData.getAllCategories()
        .$promise
        .then(
        function(data) {
            $scope.categories = data;
            angular.forEach($scope.categories, function(value) {
                this[value.id] = value.name;
            }, $scope.catNamePerId);
        },
        function(error) {
            console.log(error);
        });
}]);
