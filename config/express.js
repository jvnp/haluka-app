'use strict'

module.exports =  {

	/*
	|--------------------------------------------------------------------------
	| HTTP Configs
	|--------------------------------------------------------------------------
	|
	| trustProxy: Whether to trust proxy or not.
	|
	*/
	http: {
		trustProxy: true,
	},

	/*
	|--------------------------------------------------------------------------
	| POST Configs
	|--------------------------------------------------------------------------
	|
	| limit: Limit of the x-www-form-urlencoded POST data.
	|
	*/
	post: {
		limit: '1mb',
	},

	/*
	|--------------------------------------------------------------------------
	| Uploads Configs (multipart/form-data)
	|--------------------------------------------------------------------------
	|
	| multi: Whether to accept multiple file uploads
	| limit: Limit of the single uploaded file
	|
	*/
	uploads: {
		multi: true,
		limit: '5mb'
	},

	/*
	|--------------------------------------------------------------------------
	| View Engine Configs
	|--------------------------------------------------------------------------
	|
	| engine: View engine to use.
	|
	| [...engines: (express) => { ... } ] : For registering the above used view engine
	|
	*/
	views: {
		// Default View Engine
		engine: 'pug',

		// Registering PUG Engine
		pug: (express) => {
			express.set('views', app().resourcesPath('views'))
			express.set('view engine', 'pug')
		},

	}

}
