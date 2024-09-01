const express = require('express');
const authController = require('../../controllers/admin/AuthController');
const dashboardController = require('../../controllers/admin/DashboardController');
const { isAuthenticated } = require('../../middleware/authMiddleware');
const router = express.Router();

router.get('/register', authController.showRegister);
router.post('/register', authController.register);
router.get('/login', authController.showLogin);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

module.exports = router;
