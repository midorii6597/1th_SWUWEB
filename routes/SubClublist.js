const express = require('express');
const router = express.Router();
const Subclublist = require('../controllers/subclub');


router.get('/:username', Subclublist.getUserSubclubs);

module.exports = router;