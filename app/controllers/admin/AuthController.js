const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const path = require('path');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

exports.showRegister = async(req, res) => {
    try{
        res.render('auth/register');
    }catch(err){
        res.status(500).send('Server error');
    }
};

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password ) {
            return res.status(400).send('All fields are required');
        }
                      
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name, 
            email, 
            password: hashedPassword,
        });
        await newUser.save();

        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

exports.showLogin = (req, res) => {
    res.render('auth/login');
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).send('Invalid email or password');

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) return res.status(400).send('Invalid email or password');

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        
        res.cookie('token', token, { httpOnly: true });

        // res.redirect('/profile');
        res.redirect('/admin/dashboard');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

exports.logout = (req, res) => {
    res.clearCookie('token');
    res.redirect('/login');
};

exports.profile = (req, res) => {
    // res.sendFile(path.join(__dirname, '../../views/profile.html'));
    res.render('auth/profile');
};
