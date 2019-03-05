/**
 * CLI Bootstrapper
 *
 * Bootstraps Haluka for CLI tasks
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
			// Register Event Listeners
			require('./events')
			// Setup Database
			use('Database').setup().then(() => {
				if (typeof callback === 'function') { callback() }
			})
		}
	)
}
