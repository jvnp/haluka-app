/**
 * @name HomeController
 */
'use strict'
const router = use('Router')

/**
 * GET /
 */
router.get('/', (req, res) => {
	res.ssend('Hello!')
})

module.exports = router
