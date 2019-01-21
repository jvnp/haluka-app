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
			// Web Guard uses Passport for authentication. So, model must implement passport plugin
			// User Model to use (This is a provider name)
			model: 'app/Model/User',
		},

	}

}
