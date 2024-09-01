const express = require('express');
const authController = require('../../controllers/admin/AuthController');
const dashboardController = require('../../controllers/admin/DashboardController');
const { isAuthenticated } = require('../../middleware/authMiddleware');
const router = express.Router();

router.get('/register', isAuthenticated, authController.showRegister);
router.post('/register', authController.register);
router.get('/login', isAuthenticated, authController.showLogin);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

/* after login */
router.use(isAuthenticated);
router.get('/dashboard', dashboardController.dashboard);
router.get('/profile', authController.profile);

/* 
    router.get('/profile', (req, res) => {
        res.render('auth/profile');
    });
*/

module.exports = router;
