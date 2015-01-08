'use strict';

adsApp.controller('NavigationCtrl', ['$scope', '$location', function($scope, $location){
    // TODO check if user is logged in and serve the right navigation
    var isUserLogged = true;

    console.log($location.path());

    $scope.isActive = function (viewLocation) {
        var active = (viewLocation === '#' + $location.path());
        return active;
    };

    if(isUserLogged) {
        $scope.navLinks = [
            { text: 'Home', url: '#/' },
            { text: 'My Ads', url: '#/my-ads' },
            { text: 'Publish New Ad', url:'#/publish-ad' },
            { text: 'Edit Profile', url:'#/edit-profile' }
        ];
    } else {
        $scope.navLinks = [
            { text: 'Home', url: '#/' }
        ];
    }
}]);
