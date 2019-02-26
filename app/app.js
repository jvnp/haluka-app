'use strict'

/**
 *  APPLICATION SERVICE PROVIDERS
 * -------------------------------
 *  Service Providers are like building blocks of the Framework. They are
 *  configured here and get registered only once. These providers can
 *  be used inside any file using `use()` keyword.
 */

const providers = [
	'haluka/providers/AuthProvider',
	'haluka/providers/DatabaseProvider',
	'haluka/providers/PackageProvider',
	'haluka/providers/RoutingProvider',
	'haluka/providers/SessionProvider',
]


/**
 * CLI SERVICE PROVIDERS
 * -----------------------
 * Service Providers to be registered only in console mode.
 */
const cliProviders = [

]


/**
 * ALIASES
 * -----------
 * Defining an alias for a provider makes it easier to use the providers.
 * Multiple aliases for a single provider can be created.
 */
const aliases = {
	// Blade Providers
	Event: 'Axe/Events',
	Log: 'Axe/Log',
	Config: 'Axe/Config',
	Env: 'Axe/Env',
	// Haluka Providers
	Auth: 'Haluka/Auth',
	Database: 'Haluka/Database',
	Session: 'Haluka/Session',
	Route: 'Haluka/Routing/Route',
	Router: 'Haluka/Routing/Router'
}


/**
 * GLOBAL MIDDLEWARE
 * -----------------------
 * Middlewares that are registered globally for all the routes. 
 */
const globalMiddleware = [
	'Haluka/Session/Middleware'
	// 'Axe/Middleware/Helmet',
]


/**
 * NAMED MIDDLEWARE
 * ----------------------
 * Middleware(s) with names which can be registered as per routes in group.
 */
const namedMiddleware = {
	//
}

module.exports = { providers, cliProviders, aliases, middlewares: { globalMiddleware, namedMiddleware } }
