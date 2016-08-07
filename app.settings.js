var simpleapp = angular.module('simpleapp');

simpleapp.value('apiConfiguration', {
    environment: 'development',
    environments: {
        production: {
            urlBase: 'http://localhost:8000'
        },
        staging: {
            urlBase: 'http://localhost:8000'
        },
        development: {
            urlBase: 'http://localhost:8000'
        },
    },
    getApiUrl: function () {
        return this.environments[this.environment].urlBase;
    }
});