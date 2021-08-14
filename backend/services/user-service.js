const UserModel = require('../models/users-model')
const BaseService = require('./base-service')

class UserService extends BaseService {
    model = UserModel
}

module.exports = new UserService
