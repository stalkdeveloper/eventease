const express = require('express');
const authController = require('../../controllers/admin/AuthController');
const router = express.Router();

router.get('/register', authController.showRegister);

router.post('/register', authController.register);

router.get('/login', authController.showLogin);

router.post('/login', authController.login);

router.get('/logout', authController.logout);

router.get('/profile', authController.profile);

/* 
    router.get('/profile', (req, res) => {
        res.render('auth/profile');
    });
*/

module.exports = router;

