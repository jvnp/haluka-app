/**
 * Haluka Test Bootstrapper
 *
 * Bootstraps Haluka for Testing your app
 *
 */
'use strict'

const AppData = require('../../app/app')
const Haluka = require('haluka')

var app = new Haluka(require('path').resolve(__dirname, '../../'))

before((done) => {
	app.slash(AppData,
		async function () {
			require('./events')
			app.bootstrapServer(AppData.middlewares)
			use('Route').Route.loadRoutePointersFrom(app.routesPath('web.js'))
			await use('Database').setup()
			use('Auth')
			global.TestServer = app.getExpress()
			console.log()
			done()
		})
})

after((done) => {
	use('Database').closeAll().then(done)
})
