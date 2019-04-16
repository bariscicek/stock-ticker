const express = require('express');
const { auth } = require('../../middleware');

const router = new express.Router();

router.get('/:symbol',
  auth,
  require('./get')
);

module.exports = router;

