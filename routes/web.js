/**
 * @name WebRoutes
 * @desc Houses the routes for the application
 */
'use strict'
const { Route, to } = use('Route')

/**
|--------------------------------------------------------------------------
| Route-to-Controller Pointing
|--------------------------------------------------------------------------
|
| This file is used for pointing the routes to their respective controlller
| file for handling the routes.
| This file makes it easier to pack all and manage routes in an efficient
| way.
|
| @example:
|
| Route.point('/path/of/route', to('name_of_controller'))
|
*/

Route.point('/', to('home'))
