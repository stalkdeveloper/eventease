const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

exports.isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.redirect('/login');
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.redirect('/login');
        }
        req.user = user;
        res.locals.isAuthenticated = true;
        res.locals.userInfo = user; 
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.redirect('/login');
    }
};
