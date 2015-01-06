'use strict';
adsApp.factory('adsData', ['$resource', 'baseAppUrl', function($resource, baseAppUrl){

    function getAllTowns() {
        return $resource(baseAppUrl + 'towns').get();
    }

    function getAllCategories() {
        //return $resource(baseAppUrl + 'categories');
    }

    function getAllAds() {
        //return $resource(baseAppUrl + 'ads');
    }

    return {
        getAllTowns: getAllTowns//,
        //getAllCategories: getAllCategories,
        //getAllAds: getAllAds
    };
}]);
