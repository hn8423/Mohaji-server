const express = require('express');
const router = express.Router();

const { userController } = require('../controller');

router.post('/signin', userController.signin.post);
router.post('/signout', userController.signout.post);
router.post('/signup', userController.signup.post);
router.get('/info', userController.info.get);
router.post('/social', userController.social.post);

module.exports = router;