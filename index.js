'use strict'

/**
 * Haluka - Web Crafting with Confidence
 *
 * @package  Haluka
 * @author   Robin Panta <hacktivistic@gmail.com>
 */

// Dependencies
const chalk = require('chalk')
const Youch = require('youch')
const forTerminal = require('youch-terminal')

// Bootstrapper
const bootstrapper = require('./system/bootstrap/http')

// Booting
try {
	bootstrapper(function () {
		console.log(chalk.blue('Thank you for choosing Haluka for your application.'))
		console.log()
	})
} catch (error) {
	new Youch(error, {})
		.toJSON()
		.then((output) => {
			console.log(forTerminal(output))
			process.exit(1)
		})
}
