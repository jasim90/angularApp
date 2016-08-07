angular.module('simpleapp')
.config(['$routeProvider', function ($routeProvider) {
    
    $routeProvider.when('/index', {
        templateUrl: 'components/shared/landing/landing.html',
        controller: 'LandingPage_Controller',
        title: 'Welcome'
    });

    $routeProvider.when('/admin/dashboard', {
        templateUrl: 'components/shared/dashboard/dashboard.html',
        title: 'Dashboard'
    });
    
    $routeProvider.when('/admin/shortcuts', {
        templateUrl: 'components/shared/shortcuts/shortcuts.html',
        title: 'Dashboard'
    });
    
    $routeProvider.otherwise({
        redirectTo: '/index'
    });

}])
.factory('authHttpResponseInterceptor', ['$q', '$location', function ($q, $location) {
    return {
        response: function (response) {
            return response || $q.when(response);
        },
        responseError: function (rejection) {
            if (rejection.status === 401) {
                $location.path('/login');
            }
            return $q.reject(rejection);
        }
    }
}])
.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('authHttpResponseInterceptor');
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}]);
