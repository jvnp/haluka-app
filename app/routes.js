/**
 * @name Routes
 * @desc Houses the routes for the application
 */
'use strict'
const Route = use('Route')

/**
|--------------------------------------------------------------------------
| Route-to-Controller Pointing
|--------------------------------------------------------------------------
|
| This file is used for pointing the routes to their respective controlller
| file while in turn implements `express.Router` for handling the routes.
| This file makes it easier to pack all and manage routes in an efficient
| way.
|
| @example:
|
| Route.point('/path/of/route', to('name_of_controller'))
|
*/

Route.point('/', to('home'))
