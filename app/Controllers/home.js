/**
 * @name HomeController
 */
'use strict'
const router = use('Router')

/**
 * GET /
 */
router.get('/', (req, res) => {
	res.render('home')
})

module.exports = router
