var mod = angular.module('App', ['ngRoute']);

mod.service('getDataService', ['$http', function ($http) {
    this.registUser = function (json, callback) {
        $http.post('/api/regist', json).then(callback)
    }
}]);

mod.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');
    $routeProvider.when("/books", {
        template: " <books-component></books-component>"
    })
        .when("/", {
            template: "<firstmain-component></firstmain-component>"
        })
        .when("/book/:id", {
            template: "<h1>1</h1>"
        })
        .when("/AddBook", {
            template: "<addbook-component></addbook-component>"
        })
        .when("/signin", {
            template: "<signin-component></signin-component>"
        })
        .when("/signup", {
            template: "<signup-component></signup-component>"
        })
        .otherwise({
            template: "<h1>ERROR .....</h1> <a href='/'> Back to HomePage</a>"
        });
})


