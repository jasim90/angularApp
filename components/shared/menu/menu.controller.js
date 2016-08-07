var admMenuCntrl = angular.module('simpleapp.Admin.MenuController', []);

admMenuCntrl.controller('Admin_MenuController', ['$scope', '$location', '$route', '$rootScope',
    function ($scope, $location, $route, $rootScope) {

        $scope.initMenuController = function () {
            
        };

        $scope.loadAdminDashboard = function () {
            $location.path('/admin/dashboard');
        };

        $scope.loadAdminShortcuts = function () {
        	$location.path('/admin/shortcuts');
        };

        $scope.initMenuController();
    }]);