/// <reference path="../typings/tsd.d.ts" />
angular.module('soundboard', ['ionic'])
.run(function ($ionicPlatform: ionic.platform.IonicPlatformService) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});