/**
 * Event Loader
 *
 * Loads all the event files from app/Events directory
 *
 */
'use script'

require('require-all')({
	dirname: app().appPath('Events'),
	filter: /(.*)\.js$/,
	excludeDirs: /^\.(git|svn)$/
})
