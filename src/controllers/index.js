const express = require('express');
const router = new express.Router();

router.use('/quote', require('./quote'));

module.exports = router;

