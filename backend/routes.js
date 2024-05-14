const express = require('express');
const router = express.Router();
const controller = require('./controller');
const { authenticate } = require('./middleware');
const authController = require('./authController');

// Route for user signup
router.post('/signup', authController.signup);

// Route for user login
router.post('/login', authController.login);

router.get('/search', controller.searchBreweries);
router.post('/reviews', authenticate, controller.createReview);

module.exports = router;