'use strict'

// Event Service
var Event = use('Event')


// On Successful Express Bootstrapping
Event.on('Express.Bootstrapped', /* istanbul ignore next */ (event, app, express) => {
	//
})

// On Registration of Global Middlewares
Event.on('Express.MiddlewaresRegistered', /* istanbul ignore next */ (event, app, express) => {
	//
})


// On Server started to Listen
Event.on('Server.Listening', /* istanbul ignore next */ () => {
	// do something.
})


// On Server stopped to Listen
Event.on('Server.Closed', /* istanbul ignore next */ (event, app) => {
	// do something.
})
