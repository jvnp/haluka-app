'use strict'

module.exports = {

	/**
	|--------------------------------------------------------------------------
	| Uses
	|--------------------------------------------------------------------------
	|
	| Transport(s) to use for logging. Multiple transports can be used each
	| separated by `|` (pipe)
	| 
	| @example:
	| 	uses: 'file|console'
	|
	*/
	uses: 'file',


	/*
	|--------------------------------------------------------------------------
	| Transports
	|--------------------------------------------------------------------------
	|
	| List of available transports for logging. Winston is used for logging.
	| Any config you wish to send to the winston transport can be passed inside
	| the respective transport.
	|
	*/
	transports: {

		// Configs for Console Transport
		console: {
			// none
		},

		// Configs for File Transport
		file: {
			filename: app().storagePath('logs/haluka.log')
		}

	}

}
