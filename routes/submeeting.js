// routes/submeeting.js
const express = require('express');
const router = express.Router();
const submeetingController = require('../controllers/submeetingController');

router.get('/create', submeetingController.renderCreateSubmeetingPage);
router.post('/create', submeetingController.createSubmeeting);

module.exports = router;

