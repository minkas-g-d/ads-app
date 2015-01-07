'use strict';
adsApp.factory('publicData', ['$resource', 'baseSrvUrl', function($resource, baseSrvUrl){

    function getAllTowns() {
        return $resource(baseSrvUrl + 'towns').get();
    }

    function getAllCategories() {
        //return $resource(baseSrvUrl + 'categories');
    }

    function getAllAds() {
        //return $resource(baseSrvUrl + 'ads');
    }

    return {
        getAllTowns: getAllTowns//,
        //getAllCategories: getAllCategories,
        //getAllAds: getAllAds
    };
}]);
