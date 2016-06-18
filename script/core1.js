var app = angular.module('myapp', ['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/add',{
		templateUrl:"partials/home.html",
		controller : 'homeCtrl'
	})
	.when('/search',{
		templateUrl:"partials/search.html",
		controller : 'searchCtrl'
	})
	.otherwise({
		redirectTo:'/add'
	})
}]);

app.controller('homeCtrl', function(){
	console.log('home controller');
});
app.controller('searchCtrl', function(){
	console.log('search controller');
});