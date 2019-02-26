'use strict'

// Dependencies
const chalk = require('chalk')

// Event Service
var Event = use('Event')

// Before Booting
Event.on('Application_Booted', () => {
	// House-Keeping
	console.clear()
	console.log(chalk.bold.green('Haluka successfully booted.'))
})

// On Successful Database Connection
Event.on('Database.Connected', (event, app, conn, config) => {
	console.log(chalk.green(`Database connection succeded for '${conn}'`))
})

// On Server started to Listen
Event.on('Server.Listening', /* istanbul ignore next */ () => {
	console.log(chalk.green(`Server started listening at port ${use('Env').get('PORT', 3000)}. Your app is now available at ${chalk.blue.underline('http://localhost:' + use('Env').get('PORT'))}`))
})

