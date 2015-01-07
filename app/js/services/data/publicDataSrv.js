'use strict';
adsApp.factory('publicData', ['$resource', 'baseSrvUrl', function($resource, baseSrvUrl){

    function getAllTowns() {
        return $resource(baseSrvUrl + 'towns').query();
    }

    function getAllCategories() {
        return $resource(baseSrvUrl + 'categories').query();
    }

    function getAllAds() {
        return $resource(baseSrvUrl + 'ads').get();
    }

    return {
        getAllTowns: getAllTowns,
        getAllCategories: getAllCategories,
        getAllAds: getAllAds
    };
}]);
