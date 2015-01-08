'use strict';

adsApp.directive('categoriesDrct', function(){
    return {
        controller: 'CategoriesCtrl',
        restrict: 'A',
        templateUrl: 'templates/directives/categories.html'
    };
});
