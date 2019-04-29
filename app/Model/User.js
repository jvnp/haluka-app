/**
 * @name User
 * @author Robin Panta <hacktivistic@gmail.com>
 */
'use strict'

const UserSchema = require('../Schema/UserSchema')
const Model = use('Database').default().model('User', UserSchema);

class User extends Model {

	// methods inside

}

module.exports = User
