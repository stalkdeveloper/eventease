const express = require('express');
const authController = require('../../controllers/admin/AuthController');
const dashboardController = require('../../controllers/admin/DashboardController');
const userController = require('../../controllers/admin/UserController');
const { isAuthenticated } = require('../../middleware/authMiddleware');
const router = express.Router();

/* after login */
router.use(isAuthenticated);
router.get('/dashboard', dashboardController.dashboard);
router.get('/profile', authController.profile);

/* User */
router.get('/users', userController.index);
router.get('/user/create', userController.create);
router.post('/user/store', userController.store);

module.exports = router;
