// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic', 'ui.router'])
.config([
		'$urlRouterProvider',
		'$stateProvider',
		'$locationProvider',
		function($urlRouterProvider, $stateProvider, $locationProvider) {

			$urlRouterProvider.otherwise('/');

			//Här har vi alla sidor i appen, och deras "URL", och dess eventuella controllers, om man väljer att separera allt. 
			//Jag har valt att hålla allt i en enda controller.
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'views/home.html'//Här börjar vi..
				})
				.state('search_results', {
					url: '/rooms',
					templateUrl: 'views/search_results.html'
				})
				.state('confirm_booking', {
					url: '/your_reservation',
					templateUrl: 'views/confirm_booking.html'
				});

			$locationProvider.html5Mode(false);

		}
	])
	
.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if(window.cordova && window.cordova.plugins.Keyboard) {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

			// Don't remove this line unless you know what you are doing. It stops the viewport
			// from snapping when text inputs are focused. Ionic handles this internally for
			// a much nicer keyboard experience.
			cordova.plugins.Keyboard.disableScroll(true);
		}
		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})
