'use strict'

var env = app('Env')

module.exports = {

	/**
	|--------------------------------------------------------------------------
	| Default Database Connection
	|--------------------------------------------------------------------------
	|
	| This is the database connection to be used by default in application.
	| Default database can be access by using `default()` method from Database
	| provider.
	|
	| @example:
	|
	| const db = use('Database')
	| var default_db = db.default()
	|
	*/
	default: 'mongodb',

	/**
	|--------------------------------------------------------------------------
	| Available Database Connections
	|--------------------------------------------------------------------------
	|
	| This object contains the database connections to use in the application.
	| Multiple entries can be added for multi-connection even for the same driver.
	|
	| @example:
	|
	| 	mongodb : {
	|		//...
	|	},
	| 	mongodb2 : {
	|		//...
	|	}
	|
	| Later, these connections can be used by `using()` method in Database provider.
	|
	| @example:
	| var mongo2 = use('Database').using('mongo2')
	|
	*/
	connections: {

		mongodb: {
			// Model Driver to use. Currently only `mongoose` is supported.
			driver: 'mongoose',

			// Database Server Info
			host: env.get('DB_HOST', 'localhost'),
			port: env.get('DB_PORT', '27017'),
			database: env.get('DB_NAME', 'haluka'),
			username: env.get('DB_USER', ''),
			password: env.get('DB_USER', ''),
		},

	},

}
