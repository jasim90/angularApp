var simpleapp = angular.module('simpleapp', ['ui.bootstrap', 'ngRoute', 'ngSanitize',
      'simpleapp.LandingPageController',
      'simpleapp.Admin.MenuController'
]);

simpleapp.run(['$rootScope', '$http', function ($rootScope, $http) {

    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        if (current != null && angular.isDefined(current) && current.hasOwnProperty('$$route')) {
            $rootScope.title = angular.isDefined(current.$$route.title) ? current.$$route.title : 'Welcome';
        } else {
            $rootScope.title = 'Welcome';
        }
    });
}]);