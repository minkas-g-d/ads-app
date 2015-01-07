'use strict';

adsApp.controller('CategoriesCtrl', ['$scope', 'publicData', function($scope, publicData) {
    publicData.getAllCategories()
        .$promise
        .then(
        function(data) {
            $scope.categories = data;
        },
        function(error) {
            console.log(error);
        });
}]);
