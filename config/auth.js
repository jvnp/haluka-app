'use strict'

module.exports = {

	/*
	|--------------------------------------------------------------------------
	| Default Authentication Guard
	|--------------------------------------------------------------------------
	|
	| This is the authentication guard to use for the application by default.
	|
	*/
	default: 'web',

	/*
	|--------------------------------------------------------------------------
	| Authentication Guards
	|--------------------------------------------------------------------------
	|
	| Authentication guards are responsible for managing and authenticating
	| users in the application.
	|
	*/
	guards: {
		web: {
			// Local Driver, it uses Passport's Local Strategy for authentication.
			strategy: 'local',
		},

	},

	strategies: {

		local: function (express, config) {

			var passport = require('passport')
			var LocalStrategy = require('passport-local').Strategy

			// User Model, model must implement passport plugin
			var User = use('app/Model/User')

			// Passport configs
			passport.use(new LocalStrategy(User.authenticate()));
			passport.serializeUser(User.serializeUser());
			passport.deserializeUser(User.deserializeUser());

			// Registering Passport
			express.use(passport.initialize());
			express.use(passport.session());

			return passport

		}

	}

}
