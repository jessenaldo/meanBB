var poll_app = angular.module('poll_app', ['ngRoute', 'ngCookies', 'ngMessages'])

	poll_app.config(function($routeProvider, $locationProvider) {

		$routeProvider
			.when('/', {
				templateUrl: './partials/indexuser.html',
				controller: 'userController',
				controllerAs: 'userCtrl'
			})
			.when('/dashboard', {
				templateUrl: './partials/dashboard.html',
				controller: 'dashboardController',
				controllerAs: 'dashboardCtrl'
			})
			.when('/show/:pollId', {
				templateUrl: './partials/show.html',
				controller: 'showpollController',
				controllerAs: 'showpollCtrl'
			})
			.when('/new', {
				templateUrl: './partials/create.html',
				controller: 'newpollController',
				controllerAs: 'newpollCtrl'
			})
			.when('/logout', {
				redirectTo: '/'
			})
	})