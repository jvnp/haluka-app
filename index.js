'use strict'

/**
 * Haluka - Ready to develop express
 *
 * @package  Haluka-App
 * @author   Robin Panta <hacktivistic@gmail.com>
 */

// Dependencies
const chalk = require('chalk')
const Youch = require('youch')
const forTerminal = require('youch-terminal')

// Bootstrapper
const Haluka = require('haluka')

// House-Keeping
console.clear()
console.log(chalk.bold.yellow('Preparing to boot Haluka'))
// Booting
try {
	var server = new Haluka('./')
	server.bootstrap()
	require('./hooks')
	server.getExpress().on('Database.Connected', (conn, config) => {
		console.log(chalk.green(`Database connection succeded for '${conn}'`))
	})
	server.getExpress().on('Server.Listening', (server) => {
		console.log(chalk.green(`Server started listening at port ${use('Env').get('PORT', 3000)}`))
	})
	server.getExpress().on('Server.Error', async function (err, req, res, next) {
		if (app('Config').get('app.env') === 'production')
			res.render('error')
		else{
			const youch = new Youch(err, req)
			var html = await youch.toHTML()
			res.send(html)
		}
	})
	use('Database').setup().then(() => {
		server.register('app/Model/User', function () {
			return require('./app/Model/User')
		})
		use('Auth')
		use('Route').loadRoutePointersFrom(server.appPath('routes.js'))

		// Load Haluka Packages
		require('./package.js')

		server.listen(app('Env').get('PORT', 3000), function () {
			console.log()
			console.log(chalk.bold.green('Haluka App successfully booted.'))
			console.log(chalk.blue('Thank you for choosing Haluka for your application.'))
			console.log()
			console.log(chalk.green(`Your app is now available at ${chalk.blue.underline('http://localhost:' + use('Env').get('PORT', 3000))}`))
		})
	})
} catch (error) {
	new Youch(error, {})
		.toJSON()
		.then((output) => {
			console.log(forTerminal(output))
			process.exit(1)
		})
}
