'use strict'

module.exports = {

	/*
	|--------------------------------------------------------------------------
	| Session Store
	|--------------------------------------------------------------------------
	|
	| Specifies which session store to use.
	|
	| Available values: `memory` and `file`
	|
	*/
	store: 'memory',

	/*
	|--------------------------------------------------------------------------
	| Express-Session Configs
	|--------------------------------------------------------------------------
	|
	| Configs available for `express-session`. Visit `express-session` to see
	| more config options.
	|
	| https://npmjs.com/package/express-session
	|
	*/
	saveUninitialized: false,
	ttl: '10',  // in minutes
	resave: true,
	unset: 'destroy',
	cookie: {
		httpOnly: true,
		sameSite: true,
		secure: false
	},

	/*
	|--------------------------------------------------------------------------
	| Available Session Stores
	|--------------------------------------------------------------------------
	|
	| Configs for the currently available session stores.
	|
	| memory	: https://npmjs.com/package/memorystore
	| file		: https://npmjs.com/package/session-file-store
	|
	*/
	stores: {

		memory: {
			checkPeriod: 86400000
		},

		file: {
			path: '',
			reapAsync: true,
			reapSyncFallback: true
		}

	}

}
