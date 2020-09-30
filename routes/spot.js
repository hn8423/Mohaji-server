const express = require('express');
const router = express.Router();

const { spotController } = require('../controller')

router.get('/taginfo', spotController.taginfo.get);
router.post('/taginfo', spotController.taginfo.post);



module.exports = router;