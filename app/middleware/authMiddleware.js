const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET_KEY;

exports.isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return next();
        }
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = await User.findById(decoded.userId);
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        next();
    }
};
