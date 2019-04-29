/**
 * Haluka Test Bootstrapper
 *
 * Bootstraps Haluka for Testing your app
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
			use('Env')
			// Register Event Listeners
			require('./events')
			// Bootstrap Server
			app.bootstrapServer(AppData.middlewares)
			// Setup Database
			use('Database').setup().then(() => {
				use('Route').Route.loadRoutePointersFrom(app.routesPath('web.js'))
				callback()
			})

		}
	)
}

//}

