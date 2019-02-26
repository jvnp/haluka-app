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
			strategy: 'local',
			/**
			 * Additional configurations to be sent to the strategy can be added here
			 *
			 * 	e.g. : usernameField: 'username'
			 * 	In strategy method, config.usernameFiled would be 'username'
			 */
			//usernameField: 'username'
		},

	},


	/*
	|--------------------------------------------------------------------------
	| Authentication Strategies
	|--------------------------------------------------------------------------
	|
	| Authentication Strategies are the login strategy that is to be used by
	| Authentication Guards
	|
	*/
	strategies: {

		// Local Login Strategy based on Passport & Passport-Local
		local: function (express, config) {

			var passport = require('passport')
			var LocalStrategy = require('passport-local').Strategy

			// User Model, model must implement passport plugin
			var User = require('../app/Model/User')

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
