const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const path = require('path');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

exports.dashboard = async (req, res) => {
    try {
        res.render('admin/dashboard', {
            layout: 'layouts/admin'
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

