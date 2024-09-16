const User = require('../../models/User');
const { validateUserInput } = require('../../validations/admin/UserValidation');
const standardResponse = require('../../utils/ApiJsonResponse');
exports.index = async(req, res) => {
    try {
        const users = await User.find({ delete_at: null });
        res.render('admin/user/index', { users });
    } catch (err) {
        // res.status(500).json(helper.errorResponse('Error retrieving users', { global: [err.message] }));
    }
}

exports.create = async(req, res) => {
    try {
        res.render('admin/user/create');
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Oops, Something went wrong!',
            error: err.message
        });
    }
}

exports.store = async(req, res) => {
    try {
        const validationErrors = await validateUserInput(req.body);
        console.log(validationErrors);
        if (Object.keys(validationErrors.errors).length > 0) {
            return res.status(400).json(helper.errorResponse('Validation failed', validationErrors.errors));
        }

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            dateofbirth: req.body.dateofbirth
        });

        const data = await user.save();
        res.status(201).json(standardResponse.successResponse('User created successfully', data));
    } catch (err) {
        res.status(500).json(standardResponse.errorResponse('Oops, Something went wrong!', { error: err.message }));
    }
}