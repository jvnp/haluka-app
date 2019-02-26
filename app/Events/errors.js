'use strict'

// Dependencies
const Youch = require('youch')

// Event Service
var Event = use('Event')

// Current Environment
var Environment = use('Config').get('app.env')

// On All Errors
Event.on('Server.Error.*', /* istanbul ignore next */ async function (event, app, err, req, res, next) {
	if (Environment === 'production')
		res.render('error')
	else{
		const youch = new Youch(err, req)
		var html = await youch.toHTML()
		res.send(html)
	}
})
