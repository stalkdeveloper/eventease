const User = require('../models/User');
const { validateUserInput } = require('../../validations/admin/UserValidation');

exports.index = async(req, res) => {
    try {
        const user = await User.find().where('delete_at', '=', null);
        res.render(
            'admin/user/index'
        );
    } catch (err) {
        res.status(500).json(helper.errorResponse('Error retrieving users', { global: [err.message] }));
    }
}

exports.create = async(req, res) => {
    try {
        
    } catch (err) {
        
    }
}