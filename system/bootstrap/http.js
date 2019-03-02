/**
 * HTTP Server Bootstrapper
 *
 * Bootstraps Haluka and fires up the HTTP Server
 *
 */
'use strict'

const AppData = require('../../app/app')
const Haluka = require('haluka')

// Booting the App
var app = new Haluka(require('path').resolve(__dirname, '../../'))

module.exports = (callback) => {
	app.slash(AppData,
		function () {
			// Load Environment Variables
			var env = use('Env')
			// Register Event Listeners
			require('./events')
			// Bootstrap Server
			app.bootstrapServer(AppData.middlewares)
			// Setup Database
			use('Database').setup().then(() => {
				use('Auth')
				// // Register Routes
				use('Route').Route.loadRoutePointersFrom(app.routesPath('web.js'))
				// // Fire Up The HTTP Server
				app.listen(env.get('PORT', 3000), callback)
			})

		}
	)
}
