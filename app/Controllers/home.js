/**
 * @name HomeController
 */
'use strict'
const router = use('Router')

/**
 * GET /
 */
router.get('/', (req, res) => {
	res.send('Hello!')
})

module.exports = router
